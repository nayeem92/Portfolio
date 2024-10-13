import json
import boto3
from decimal import Decimal

# Initialize DynamoDB client
dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('VisitorCounter-dev')

def handler(event, context):
    print('received event:')
    print(event)
    
    # Increment the counter
    response = table.update_item(
        Key={'id': 'visitor_count'},  # Assuming you have a primary key
        UpdateExpression='ADD visit_count :incr',
        ExpressionAttributeValues={':incr': 1},
        ReturnValues='UPDATED_NEW'
    )
    
    # Retrieve the updated count
    updated_count = response['Attributes']['visit_count']
    
    # Convert Decimal to int for JSON serialization
    updated_count = int(updated_count) if isinstance(updated_count, Decimal) else updated_count

    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        },
        'body': json.dumps({'message': 'Visitor count incremented!', 'count': updated_count})
    }
