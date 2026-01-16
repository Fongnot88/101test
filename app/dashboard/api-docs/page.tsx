"use client"

import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"
import { Card, CardContent } from "@/components/ui/card"

export default function ApiDocsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">API Documentation</h3>
        <p className="text-sm text-muted-foreground">
          Explore the API endpoints available in the application.
        </p>
      </div>
      <Card>
          <CardContent className="p-0">
            <div className="swagger-wrapper">
                <SwaggerUI url="/openapi.json" />
            </div>
          </CardContent>
      </Card>
      
      <style jsx global>{`
        .swagger-wrapper .swagger-ui .wrapper {
            padding: 0;
            max-width: none;
        }
        .swagger-wrapper .swagger-ui .info {
            margin: 20px 0;
        }
        .swagger-wrapper .swagger-ui .scheme-container {
            box-shadow: none;
            border-bottom: 1px solid #e2e8f0;
        }
        /* Dark mode overrides if needed, basic fix below */
        :global(.dark) .swagger-ui {
            filter: invert(0.88) hue-rotate(180deg);
        }
        :global(.dark) .swagger-ui .highlight-code {
            filter: invert(1) hue-rotate(180deg);
        }
      `}</style>
    </div>
  )
}
