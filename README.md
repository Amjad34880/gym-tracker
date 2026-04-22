# Gym Tracker App

## Description

A fullstack application to track workouts using React, Express, and MongoDB Atlas.

## Features

* Create, read, update, delete workouts
* Users and exercises stored in MongoDB
* Relationships using populate
* Custom endpoint for stats

## How to run

### Server

cd server
npm install
npm run dev

### Client

cd client
npm install
npm run dev

## API Endpoints

* GET /api/workouts
* POST /api/workouts
* PUT /api/workouts/:id
* DELETE /api/workouts/:id
* GET /api/users/:id/workouts
