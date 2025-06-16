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

## Attendances

### All Attendances

#### Endpoint

`GET` /api/attendances

#### Description

Fetches all attendances, by default ordered by created in desc direction

#### API Options

- `limit` (number, optional) : The number of data are taken
- `grouped-name-date` (boolean, optional): UNIQUE this will change the return data to be automatically grouped by User->name => {Month Year} => Attendance
- `of` (string, optional) : numbers of user id seperated by comas (,). Will return only attendance of said users.
- `month` (number, optional | required): will query only attendance of said month (1 - 12)
- `year` (number, optional | required): will query only attendances of said year (if one of month or year are inserted, the other becomes required)
- `type` (string, optional) : will query only the specified logs with matching type

#### Response

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

### Best Attendances In Year

#### Endpoint

`GET` `/api/attendances/best`

#### Description

This api will return the best employee with the highest score based on attendances and late attendances

#### Response

```json
{
  "Employee name": {
    "score": 12,
    "totalLate": 2,
    "workFromHome": 7,
    "attendances": 14
  }
}
```

### 5 Day Summarize

#### Endpoint

`GET` `/api/attendances/sumarize`

#### Description

Return the latest 5 days attendances (Weekday only)

#### Response

```json
    [
        ...
        {
            "total": 5,
            "attendances": `Log[]`,
            "totalLate": 2,
            "date": "2024-12-23",
            "latestClockInTime": "09:23:12" | null
        }
        ...
    ]
```

### Admin Clock Out

#### Endpoint

`POST` `/api/attendance/manual-clock-out`

#### Description

Endpoint to send request when admin manually clockout an employee

#### Request Options
`Content Type : application/form-data`

#### Required Field

| Field | Type | Example |
|-------|------|---------|
| `clock_out_time` | `string` | `09:00:00`|
| `clock_out_proof`|`File`| |
| `work[]`|`string[]`|`["work", "work"]`|

#### Success Response

    {
        "clock_out_time": "16:00:00",
        "clock_out_latitude": null,
        "clock_out_longitude": null,
        "clock_out_picture": "/upload/log-proof/***"
    }

## Holidays Resource

### Endpoint

`GET` /api/holidays

### Description

Fetches all holidays, by default ordered by created in desc direction

### API Options

No Options

### Response

```json
[
    ...
    {
        "id": 5,
        "date": "2024-07-06T17:00:00.000Z",
        "name": "Tahun Baru Hijriah",
        "created_at": "2024-07-08T08:51:32.000Z",
        "updated_at": "2024-07-08T08:51:32.000Z"
    }
    ...
]
```

## Users Resource

### Endpoint

`GET` /api/users

### Description

Fetches all users, by default ordered by created in desc direction

### API Options

- `role` (string: `intern` | `employee`): fetch only users with said role, by default fetch all users except admin
- `withMonthLogs` (string: `no value`): include fetching the logs of current month of each user
- `withMonthDayOffRequest` (string: `no value`): include day off request of current month of each user

### Response

```json
[
    ...
    {
        "job_position":
            {
                "id": 3,
                "name": "Intern Developer",
                "shift_start": "09:00",
                "shift_end": "16:00",
                "created_at": "2024-07-01T02:09:21.000Z",
                "updated_at": "2024-07-01T02:09:21.000Z",
                "work_day": "1,2,3,4,5",
                "salary": 0
            },
        "name": "Dewa Raditya Rochman",
        "work_id": "ID008",
        "role": "intern",
        "job_position_id": 3,
        "created_at": "2024-07-01T02:17:42.000Z",
        "updated_at": "2024-07-10T01:03:32.000Z",
        "gender": "male",
        "id": 16,
        "profile_picture": null,
        "api_profile_picture": null
    },
    ...
]
```

## Image Resource

### Endpoint

`GET` /api/images/[...filepath]

### Description

Fetches the uploaded image from storage with path of filepath. this api can be directly placed on image src

### API Options

- `...filepath` (string): fetch the image according to the filepath (...filepath means it can be : /profile/image-name.jpg or /projects/private/image-name.jpg). every `/` in ..filepath will be considered a directory

### Response

`Content-type`: `image/*`