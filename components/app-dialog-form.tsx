import React, { useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "./ui/textarea";

export interface Field<T> {
  name: keyof T;
  label: string;
  placeholder: string;
  type: "text" | "select" | "textarea" | "checkbox";
  options?: { value: string; label: string }[];
}

interface AppDialogFormProps<T> {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description: string;
  initialValues: T;
  fields: Field<T>[];
  onSubmit: (values: T) => void;
}

export default function AppDialogForm<T>({
  open,
  onOpenChange,
  title,
  description,
  initialValues,
  fields,
  onSubmit,
}: AppDialogFormProps<T>) {
  const [formData, setFormData] = React.useState<T>(initialValues);

  // Reset formData setiap kali dialog dibuka
  useEffect(() => {
    if (open) {
      setFormData(initialValues);
    }
  }, [open, initialValues]);

  const handleChange = (field: keyof T, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
    onOpenChange(false); // Tutup dialog setelah submit
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          {fields.map((field) => (
            <div key={String(field.name)} className="space-y-2">
              <Label
                htmlFor={String(field.name)}
                className="text-sm font-medium"
              >
                {field.label}
              </Label>
              {field.type === "textarea" ? (
                <Textarea
                  id={String(field.name)}
                  placeholder={field.placeholder}
                  value={String(formData[field.name])}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  className="w-full"
                />
              ) : field.type === "select" ? (
                field.options && (
                  <Select
                    value={String(formData[field.name])}
                    onValueChange={(value) => handleChange(field.name, value)}
                  >
                    <SelectTrigger id={String(field.name)} className="w-full">
                      <SelectValue placeholder={field.placeholder} />
                    </SelectTrigger>
                    <SelectContent>
                      {field.options.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )
              ) : field.type === "checkbox" ? (
                <div className="flex items-center">
                  <input
                    id={String(field.name)}
                    type="checkbox"
                    checked={formData[field.name] as boolean}
                    onChange={(e) => handleChange(field.name, e.target.checked)}
                    className="mr-2 rounded border-gray-300 text-primary-600 shadow-sm focus:ring-primary-500"
                  />
                  <label
                    htmlFor={String(field.name)}
                    className="text-sm font-medium text-gray-700"
                  >
                    {field.label}
                  </label>
                </div>
              ) : (
                <Input
                  id={String(field.name)}
                  placeholder={field.placeholder}
                  value={String(formData[field.name])}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  className="w-full"
                />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-end space-x-2 mt-4">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
