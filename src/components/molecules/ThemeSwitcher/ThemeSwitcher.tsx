import { Switch } from "@mantine/core";
import { IconSun } from "@tabler/icons-react";
import { IconMoon } from "@tabler/icons-react";

const ThemeSwitcher = () => {
  const iconMoon = <IconMoon />;
  const iconSun = <IconSun />;
  return <Switch onLabel={iconMoon} offLabel={iconSun} size="lg" />;
};

export default ThemeSwitcher;
