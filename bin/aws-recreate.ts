#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { AwsRecreateStack } from '../lib/aws-recreate-stack';

const app = new cdk.App();
new AwsRecreateStack(app, 'AwsRecreateStack');
