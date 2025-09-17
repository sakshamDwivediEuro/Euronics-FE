export interface ButtonConfig {
  text: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  icon?: string;
  iconClass?: string;
  imageSrc?: string;
  iconPosition?: 'before' | 'after';
  class?: string;
  tooltip?: string;
}
