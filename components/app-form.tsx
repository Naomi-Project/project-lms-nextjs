import React, { useState } from "react";
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
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "./ui/textarea";

export interface Field<T> {
  name: keyof T;
  placeholder: string;
  label: string;
  type: "text" | "select" | "textarea";
  options?: { value: string; label: string }[];
}

interface AppFormProps<T> {
  title: string;
  description: string;
  initialValues: T;
  fields: Field<T>[];
  onSubmit: (values: T) => void;
  onCancel: () => void;
}

function AppForm<T>({
  title,
  description,
  initialValues,
  fields,
  onSubmit,
  onCancel,
}: AppFormProps<T>) {
  const [formData, setFormData] = useState<T>(initialValues);

  const handleChange = (field: keyof T, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title || "Form"}</CardTitle>
        <CardDescription>
          {description || "Isi form dibawah ini"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {fields.map((field) => (
          <div key={String(field.name)} className="space-y-2">
            <Label htmlFor={String(field.name)} className="text-sm font-medium">
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
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button onClick={() => onSubmit(formData)}>Submit</Button>
      </CardFooter>
    </Card>
  );
}

export default AppForm;
