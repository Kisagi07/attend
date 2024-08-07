This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# API Documentation

## Food And Drink Note

### Endpoint

`GET` /api/food-and-drink

### Description

Fetches all food and drink note, by default ordered by when note are indicating not when it is created

### API Options

- `limit` (number, optional) : The number of data are taken
- `orderIn` (string : (desc | asc) = asc, optional): change the default ordering direction

### Response

```json
[
    ...
   {
        "id": 1,
        "category": "drink",
        "amount": 1,
        "cost": 20000,
        "description": "Galon Le Minerale",
        "date": "2024-08-01T07:10:06.602Z",
        "createdAt": "2024-08-05T07:10:53.258Z",
        "updatedAt": "2024-08-05T07:10:53.258Z"
    },
    ...
]
```

## Attendances Note

### Endpoint

`GET` /api/attendances

### Description

Fetches all attendances, by default ordered by created in desc direction

### API Options

- `limit` (number, optional) : The number of data are taken
- `grouped-name-date` (boolean, optional): UNIQUE this will change the return data to be automatically grouped by User->name => {Month Year} => Attendance
- `of` (string, optional) : numbers of user id seperated by comas (,). Will return only attendance of said users.
- `month` (number, optional | required): will query only attendance of said month (1 - 12)
- `year` (number, optional | required): will query only attendances of said year (if one of month or year are inserted, the other becomes required)

### Response

```json
[
    ...
   {
        "id": 189,
        "type": "work_from_office",
        "user_id": 5,
        "date": "2024-08-06T00:00:00.000Z",
        "clock_in_time": "1970-01-01T08:55:51.000Z",
        "clock_in_latitude": "-7.6595027",
        "clock_in_longitude": "112.7973733",
        "created_at": "2024-08-06T01:55:51.000Z",
        "updated_at": "2024-08-06T01:55:51.000Z",
        "work": [],
        "clock_out_time": null,
        "clock_out_latitude": null,
        "clock_out_longitude": null,
        "user": {
            ...
            "job_position" : {...}
        }
    },
    ...
]
```
