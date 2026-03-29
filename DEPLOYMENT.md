# Label Ease Deployment Guide

Complete deployment workflow using AWS S3 + CloudFront + Route53 (standard across all apps).

## Architecture

```
label-ease.com (Route53)
    ↓
CloudFront CDN (caching, global distribution)
    ↓
S3 Bucket (static files: dist/)
    ↓
GitHub Actions (automatic deploys)
```

## Prerequisites

- AWS Account (already set up)
- S3 Bucket for production (`prod-label-ease`)
- S3 Bucket for staging (`staging-label-ease`)
- CloudFront Distribution (production + staging)
- GitHub Secrets configured
- Route53 domain: label-ease.com

## Local Development

```bash
npm install
npm run dev        # localhost:5173
npm run build      # Build for production (→ dist/)
```

## GitHub Secrets Setup

Configure these in GitHub repo settings (Settings → Secrets and variables → Actions):

### Environment: staging
```
AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY
STAGING_S3_BUCKET=staging-label-ease
STAGING_CLOUDFRONT_DISTRIBUTION_ID=<your-distribution-id>
VITE_SUPABASE_URL=https://jwrmjxbfqdaveyoiyjpt.supabase.co
VITE_SUPABASE_ANON_KEY=<anon-key>
```

### Environment: production
```
AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY
PROD_S3_BUCKET=prod-label-ease
PROD_CLOUDFRONT_DISTRIBUTION_ID=<your-distribution-id>
VITE_SUPABASE_URL=https://jwrmjxbfqdaveyoiyjpt.supabase.co
VITE_SUPABASE_ANON_KEY=<anon-key>
```

## AWS Infrastructure Setup

### 1. Create S3 Buckets

```bash
# Production bucket
aws s3 mb s3://prod-label-ease --region us-east-1
aws s3api put-bucket-versioning --bucket prod-label-ease --versioning-configuration Status=Enabled

# Staging bucket
aws s3 mb s3://staging-label-ease --region us-east-1
aws s3api put-bucket-versioning --bucket staging-label-ease --versioning-configuration Status=Enabled

# Block public access, configure for website hosting
aws s3api put-bucket-policy --bucket prod-label-ease --policy file://bucket-policy.json
```

### 2. Create CloudFront Distributions

**For Production:**
```bash
aws cloudfront create-distribution --distribution-config file://prod-distribution.json
```

**For Staging:**
```bash
aws cloudfront create-distribution --distribution-config file://staging-distribution.json
```

Get the distribution IDs from output and add to GitHub Secrets.

### 3. Update Route53

Point label-ease.com to CloudFront:

```bash
aws route53 change-resource-record-sets \
  --hosted-zone-id <ZONE_ID> \
  --change-batch file://route53-update.json
```

**route53-update.json:**
```json
{
  "Changes": [
    {
      "Action": "UPSERT",
      "ResourceRecordSet": {
        "Name": "label-ease.com",
        "Type": "A",
        "AliasTarget": {
          "HostedZoneId": "Z2FDTNDATAQYW2",
          "DNSName": "<your-cloudfront-domain>.cloudfront.net",
          "EvaluateTargetHealth": false
        }
      }
    }
  ]
}
```

## Deployment Workflows

### CI Pipeline
- Triggered on: push to main/develop, PR to main/develop
- Runs: lint, test
- No deployment

### Staging Deploy
- Triggered: Auto-deploy on push to develop
- Deploys to: S3 staging bucket → CloudFront staging
- Uses: GitHub environment "staging"

### Production Deploy
- Triggered: Manual via GitHub Actions (workflow_dispatch)
- Deploys to: S3 production bucket → CloudFront production
- Uses: GitHub environment "production"
- Invalidates CloudFront cache

## Deployment Process

### Deploy to Staging
1. Commit to `develop` branch
2. GitHub Actions auto-triggers
3. Builds dist/
4. Syncs to S3 staging bucket
5. Invalidates CloudFront cache
6. Live at: staging-label-ease.s3.us-east-1.amazonaws.com (or via staging subdomain)

### Deploy to Production
1. Go to GitHub Actions
2. Select "Deploy Production" workflow
3. Click "Run workflow" on main branch
4. Approves deployment
5. Builds dist/
6. Syncs to S3 production bucket
7. Invalidates CloudFront cache
8. Live at: label-ease.com (via CloudFront)

## Caching Strategy

**Assets** (dist/assets/*):
- Cache-Control: `public, max-age=31536000, immutable`
- 1-year cache (files are hashed, safe to cache long)

**HTML** (index.html):
- Cache-Control: `public, max-age=300`
- 5-minute cache (allows quick updates)

## Monitoring & Logs

### GitHub Actions
- Status: github.com/jlkeiper/labelease/actions
- Logs: Click workflow run for details

### AWS S3
- Bucket contents: AWS Console → S3 → bucket name
- Object metadata: Check cache-control headers

### CloudFront
- Distribution: AWS Console → CloudFront
- Cache stats: Monitoring tab
- Invalidations: Invalidations tab

## Troubleshooting

### Deploy fails with S3 access denied
- Check AWS credentials in GitHub Secrets
- Verify S3 bucket policy allows access
- Check IAM permissions

### Site shows old version after deploy
- CloudFront cache invalidation may be pending
- Check CloudFront Invalidations tab
- Force browser cache clear: Ctrl+Shift+R

### 404 errors for deep routes
- Ensure CloudFront is configured to serve index.html for 404s
- Check S3 error document: index.html

## Local Testing

Test production build locally:
```bash
npm run build
npm run preview      # Serves dist/ on localhost:4173
```

## Rollback

If production deploy has issues:
1. Git revert bad commit
2. Create new deploy via GitHub Actions
3. CloudFront invalidation happens automatically

Alternative: Manually restore from S3 versioning:
```bash
aws s3 list-object-versions --bucket prod-label-ease
aws s3 cp s3://prod-label-ease/index.html.previous s3://prod-label-ease/index.html
```

## Cost Optimization

- **S3 Storage**: ~$0.023 per GB/month (minimal for static site)
- **CloudFront**: ~$0.085 per GB transferred (first 10TB/month)
- **Route53**: $0.50 per hosted zone/month
- **Total estimated**: $5-20/month depending on traffic

Total is significantly cheaper than traditional hosting.

---

**Status:** AWS infrastructure ready. Workflows configured. Ready for CI/CD pipeline setup.
