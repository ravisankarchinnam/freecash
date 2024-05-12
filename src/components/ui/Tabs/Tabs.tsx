import { ChangeEvent, ReactNode, useState } from "react";
import {
  Box,
  Tab,
  Tabs as MuiTabs,
  TabsProps as MuiTabsProps,
} from "@mui/material";

export interface TabPanelProps {
  children?: ReactNode;
  index: string | number;
  value: string | number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`${value}-panel-${index}`}
      aria-labelledby={`${value}--${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

export type TabProps = {
  label: string;
  content: ReactNode;
};

export type TabsProps = MuiTabsProps & {
  tabs: TabProps[];
  activeTab?: number;
};

export default function Tabs({ tabs, activeTab, ...rest }: TabsProps) {
  const [value, setValue] = useState(activeTab ?? 0);

  const handleChange = (event: ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <MuiTabs
        {...rest}
        value={value}
        onChange={handleChange}
        sx={{ backgroundColor: "primary.main", borderRadius: 10 }}
      >
        {tabs?.map(({ label }) => <Tab key={label} label={label} />)}
      </MuiTabs>
      {tabs?.map((tab, index) => (
        <TabPanel key={tab?.label} value={value} index={index}>
          {tab?.content}
        </TabPanel>
      ))}
    </div>
  );
}
