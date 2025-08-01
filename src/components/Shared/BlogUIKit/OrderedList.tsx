import React from "react";

interface OrderedListProps extends React.OlHTMLAttributes<HTMLOListElement> {
  children: React.ReactNode;
}

const OrderedList = ({
  children,
  className = "",
  ...props
}: OrderedListProps) => {
  return (
    <ol className={`list-decimal pl-6 space-y-2 ${className}`} {...props}>
      {React.Children.map(children, (child) => {
        // If it's an <li>, add custom class to it
        if (React.isValidElement(child) && child.type === "li") {
          const liChild = child as React.ReactElement<
            React.LiHTMLAttributes<HTMLLIElement>
          >;
          return React.cloneElement(liChild, {
            className: `text-neutral-800 dark:text-neutral-200 text-base leading-relaxed ${
              liChild.props.className || ""
            }`,
          });
        }
        return child;
      })}
    </ol>
  );
};

export default OrderedList;
