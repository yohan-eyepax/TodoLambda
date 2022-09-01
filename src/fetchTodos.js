"use strict";
const { v4 } = require("uuid");
const AWS = require("aws-sdk");

const fetchTodos = async (event) => {
  const dynamoDb = new AWS.DynamoDB.DocumentClient()

  let todos;

  try{
    const results = await dynamoDb.scan({ TableName: "TodoTable" }).promise()
    todos = results.Items
  }catch(error){
    console.log(error);
  }

  return {
    statusCode: 200,
    body: JSON.stringify(todos),
  };
};

module.exports = {
  handler: fetchTodos
}