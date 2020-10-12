export interface NavItem {
  title: string;
  icon?: string;
  badge?: {
    title: string;
    classes: string;
  };
  hidden?: boolean;
  url?: string;
  exactMatch?: boolean;
  externalUrl?: boolean;
  openInNewTab?: boolean;
  function?: any;
  children?: NavItem[];
}
