"use client";
/* eslint-disable */
import { useEffect, useState } from "react";
import { FormControl, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import Swal from "sweetalert2";
import { toast } from "sonner";
import { title } from "process";

interface CommonSoalBuilderProps {
  name: string;
  label: string;
  dataDefault?: string | undefined;
  placeholder?: string;
}
const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  }
});

const CommonSoalBuilder: React.FC<CommonSoalBuilderProps> = ({ name, label, dataDefault }) => {
  const { setValue, watch } = useFormContext();
  const value = watch(name);
  const [questionEco, setQuestionEco] = useState([
    { question: "", optionA: "", optionB: "", optionC: "", optionD: "", correctAnswer: "" },
  ]);

  useEffect(() => {
    setValue(name, JSON.stringify(questionEco) || "");
  }, [value, setValue, name, questionEco]);

  useEffect(() => {
    if (dataDefault) {
      setQuestionEco(JSON.parse(dataDefault ?? ""));
    }
  }, [dataDefault]);

  // ✅ Fungsi Validasi (Memeriksa apakah ada soal tanpa jawaban benar)
  const validateQuestions = () => {
    const incompleteQuestion = questionEco.find((q) => q.correctAnswer === "");
    if (incompleteQuestion) {
      Toast.fire({
        icon: "error",
        title: "Harap isi soal dan jawaban benar untuk setiap pertanyaan!"
      });
      return false;
    }
    return true;
  };

  // ✅ Handler untuk menambahkan soal baru (dengan validasi)
  const handleAddQuestion = (e: any) => {
    e.preventDefault();
    if (!validateQuestions()) return; // Cek validasi sebelum menambah soal baru
    setQuestionEco([
      ...questionEco,
      { question: "", optionA: "", optionB: "", optionC: "", optionD: "", correctAnswer: "" },
    ]);
  };

  // ✅ Handler untuk menghapus soal berdasarkan index
  const handleRemoveQuestion = (index: number) => {
    setQuestionEco(questionEco.filter((_, i) => i !== index));
  };

  // ✅ Handler untuk mengubah pertanyaan
  const handleChangeQuestion = (index: number, newValue: string) => {
    const updatedQuestions = [...questionEco];
    updatedQuestions[index].question = newValue;
    setQuestionEco(updatedQuestions);
  };

  // ✅ Handler untuk mengubah opsi jawaban
  const handleChangeOption = (index: number, optionKey: keyof typeof questionEco[0], newValue: string) => {
    const updatedQuestions = [...questionEco];
    updatedQuestions[index][optionKey] = newValue;
    setQuestionEco(updatedQuestions);
  };

  // ✅ Handler untuk memilih jawaban yang benar
  const handleSelectCorrectAnswer = (index: number, selectedOption: string) => {
    const updatedQuestions = [...questionEco];
    updatedQuestions[index].correctAnswer = selectedOption;
    setQuestionEco(updatedQuestions);
  };

  return (
    <FormItem>
      <FormLabel>{label}</FormLabel>
      <FormControl>
        <div className="flex flex-col gap-4">
          {questionEco.map((item, index) => (
            <div key={index} className="border p-4 rounded-lg relative">
              {/* Tombol Hapus */}
              {questionEco.length > 1 && (
                <Button
                  variant="destructive"
                  className="absolute top-2 right-3"
                  onClick={() => handleRemoveQuestion(index)}
                >
                  <Trash />
                </Button>
              )}
              {/* Input Pertanyaan */}
              <div className="flex flex-col">
                <Label htmlFor={`title-${index}`}>
                  {item.question ? `${index + 1}. ${item.question}` : "Judul Pertanyaan Ke " + (index + 1)}
                </Label>
                <Input
                  type="text"
                  id={`title-${index}`}
                  placeholder="Masukkan pertanyaan"
                  className="mt-2"
                  value={item.question}
                  onChange={(e) => handleChangeQuestion(index, e.target.value)}
                />
              </div>

              {/* Pilihan Jawaban */}
              <div className="mt-3 gap-3 flex flex-col">
                <RadioGroup value={item.correctAnswer} onValueChange={(value) => handleSelectCorrectAnswer(index, value)}>
                  {["A", "B", "C", "D"].map((option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <RadioGroupItem value={option} id={`r${index}-${option}`} />
                      <Input
                        type="text"
                        id={`option-${index}-${option}`}
                        placeholder={`Jawaban ${option}`}
                        className="w-30"
                        value={item[`option${option}` as keyof typeof item]}
                        onChange={(e) => handleChangeOption(index, `option${option}` as keyof typeof item, e.target.value)}
                      />
                    </div>
                  ))}
                </RadioGroup>
                <span className="text-primary">
                  {item.correctAnswer ? `Jawaban benar : ${item.correctAnswer}` : ""}
                </span>
              </div>
            </div>
          ))}
          <Button
            className="mt-2 hover:bg-transparent w-full bg-transparent text-primary shadow-none"
            onClick={(e) => handleAddQuestion(e)}
          >
            <span className="underline underline-offset-1">+ Buat Soal Baru</span>
          </Button>
        </div>
      </FormControl>
      <FormMessage />
    </FormItem>
  );
};

export default CommonSoalBuilder;
