import React from "react";
import clsx from "clsx";

interface TimelineProps {
  children?: React.ReactNode;
}

interface ItemProps {
  children?: React.ReactNode;
}

interface PointProps {
  color?: "red" | "blue" | "green";
}

interface TitleProps {
  children?: React.ReactNode;
}

interface ContentProps {
  children?: React.ReactNode;
}

interface TimeProps {
  children?: React.ReactNode;
}

interface BodyProps {
  children?: React.ReactNode;
}

const Timeline: React.FC<TimelineProps> & {
  Body: React.FC<BodyProps>;
  Item: React.FC<ItemProps>;
  Point: React.FC<PointProps>;
  Title: React.FC<TitleProps>;
  Content: React.FC<ContentProps>;
  Time: React.FC<TimeProps>;
} = ({ children }) => {
  return (
    <section className="border-l-1 border-slate-200">
      <ul>{children}</ul>
    </section>
  );
};

const Item: React.FC<ItemProps> = ({ children }) => {
  return <li className="relative px-4">{children}</li>;
};

const Point: React.FC<PointProps> = ({ color = "red" }) => {
  return (
    <div
      className={clsx(
        "absolute left-0 top-0 h-3 w-3 -translate-x-1/2 translate-y-1/2 rounded-full",
        {
          "bg-red-400": color === "red",
          "bg-blue-400": color === "blue",
          "bg-green-400": color === "green",
        },
      )}
    ></div>
  );
};

const Title: React.FC<TitleProps> = ({ children }) => {
  return <h2 className="text-lg font-medium">{children}</h2>;
};

const Content: React.FC<ContentProps> = ({ children }) => {
  return <div>{children}</div>;
};

const Time: React.FC<TimeProps> = ({ children }) => {
  return <span className="text-sm text-slate-400">{children}</span>;
};

const Body: React.FC<BodyProps> = ({ children }) => {
  return <div className="my-1 px-2">{children}</div>;
};

Timeline.Body = Body;
Timeline.Title = Title;
Timeline.Content = Content;
Timeline.Item = Item;
Timeline.Point = Point;
Timeline.Time = Time;

export default Timeline;
