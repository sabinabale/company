const Slot = (props: React.PropsWithChildren<{}>) => {
  const { children, ...otherProps } = props;
  return React.cloneElement(
    children as React.ReactElement<
      any,
      string | React.JSXElementConstructor<any>
    >,
    otherProps
  );
};
