# Test POST /api/v1/recommendations against a local FastAPI server.
# Usage (from project root): .\scripts\test-recommendations.ps1
# Optional: $env:API_BASE_URL = "https://your-api.example.com"

$ErrorActionPreference = "Stop"

$baseUrl = if ($env:API_BASE_URL) { $env:API_BASE_URL.TrimEnd("/") } else { "http://127.0.0.1:8080" }

Write-Host "GET $baseUrl/api/v1/health"
$health = Invoke-WebRequest -Uri "$baseUrl/api/v1/health" -UseBasicParsing
Write-Host $health.Content
Write-Host ""

$body = @'
{
  "location": "Bangalore, Banashankari",
  "budget": "medium",
  "cuisine": "North Indian",
  "min_rating": 4.0,
  "additional_preferences": "family friendly",
  "top_k": 5
}
'@

Write-Host "POST $baseUrl/api/v1/recommendations"
$response = Invoke-WebRequest `
    -Uri "$baseUrl/api/v1/recommendations" `
    -Method POST `
    -ContentType "application/json" `
    -Body $body `
    -UseBasicParsing

$response.Content | ConvertFrom-Json | ConvertTo-Json -Depth 10
