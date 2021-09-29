import React, { useState } from "react";
import { Tab, Tabs, Typography, AppBar } from "@material-ui/core";

interface TypeTabpanelProps {
  children: React.ReactNode;
  value: number;
  index: number;
  className?: string;
}

const TabPanel: React.VFC<TypeTabpanelProps> = (props: TypeTabpanelProps) => {
  const { children, value, index, className } = props;

  return (
    <div role="tabpanel" hidden={value !== index} {...className}>
      {value === index && <div className="flex justifyContentCenter">{children}</div>}
    </div>
  );
};

interface TypeProps {
  children: {
    label: string;
    node: React.ReactNode;
  }[];
}

export const OffersInformation: React.VFC<TypeProps> = ({
  children,
}: TypeProps) => {
  const [tabsIndex, setTabsIndex] = useState(0);
  const updateTabsIndex = async (event, newValue) => {
    setTabsIndex(newValue);
  };
  return (
    <>
      <AppBar position="static" color="default">
        <Tabs value={tabsIndex} onChange={updateTabsIndex} centered>
          {children.map((item) => {
            return <Tab key={item.label} label={item.label} />;
          })}
        </Tabs>
      </AppBar>
      {children.map((item, index) => {
        return (
          <TabPanel key={item.label} value={tabsIndex} index={index}>
            {item.node}
          </TabPanel>
        );
      })}
    </>
  );
};
