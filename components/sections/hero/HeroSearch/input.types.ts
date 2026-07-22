export interface InputPlaceholderProps {
  value: string;
}

export interface InputFieldProps {
  value: string;
  onChange: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}