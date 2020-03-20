import core = require("@aws-cdk/core");
import lambda = require("@aws-cdk/aws-lambda");

export class WidgetService extends core.Construct {
  constructor(scope: core.Construct, id: string) {
    super(scope, id);

    const handler = new lambda.Function(this, "WidgetHandler", {
      runtime: lambda.Runtime.NODEJS_10_X, // So we can use async in widget.js
      code: lambda.Code.asset("resources"),
      handler: "widgets.main",
      environment: {
      }
    });
  }
}
