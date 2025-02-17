import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import { getValueByPath } from "@/lib/getter";
import { Pencil } from "lucide-react";
import Image from "next/image";
/* eslint-disable @typescript-eslint/no-explicit-any */
export interface CommonSectionField<T extends Record<any, any>> {
    key: keyof T & string;
    label: string;
    emptyValue?: string;
}

export interface CommonDetailSection<T extends Record<any, any>> {
    label: string;
    fields: CommonSectionField<T>[];
}

export interface CommonDetailPageProps<T extends Record<any, any>> {
    title: string;
    image: string;
    name: string;
    jobdesk: string;
    data: T;
    sections: CommonDetailSection<T>[];
}

export function CommonDetailPage<T extends Record<any, any>>(
    props: CommonDetailPageProps<T>
) {
    return (
        <>
            <Toggle
                value="bold"
                aria-label="Toggle bold"
                className="bg-blue-100 border-blue-100 rounded-lg"
            >
                <p className="text-sm text-blue-500">{props.title}</p>
            </Toggle>
            <div className="border-2 rounded-lg flex row items-center relative mt-8 bg-white">
                <div className="grid grid-cols-12 gap-4 p-4">
                    <div className="md:col-span-1 col-span-2">
                        <Image
                            src={props.image || ""}
                            width={100}
                            height={100}
                            alt="user"
                            className="w-16 h-16 object-cover rounded-lg mx-auto"
                            priority={true}
                        />
                    </div>

                    <div className="md:col-span-11 col-span-10 my-auto">
                        <h1 className="font-bold text-sm">{props.name}</h1>
                        <p className="w-20 text-center mt-1 bg-blue-100 text-blue-400 p-1 border-blue-100 rounded-lg text-xs">
                            {props.jobdesk}
                        </p>
                    </div>
                </div>
                <div className="absolute right-10">
                    <Button className="bg-blue-400 bg-opacity-30 shadow-none text-blue-400 hover:text-white"><Pencil /> Edit</Button>
                </div>
            </div>
            <div>
                <div className="border-2 rounded-lg bg-white p-5 mt-10">
                    <div className="md:grid grid-cols-2 gap-4 mt-0">
                        {props.sections.map((section, index) => (
                            <div key={index} className="mt-0">
                                <div className=" border-dashed border-gray-200 pb-6">
                                    <h2 className="text-lg font-bold text-gray-900 mb-4">
                                        Data {props.jobdesk}
                                    </h2>
                                    <dl
                                        className={`grid gap-6 ${Object.keys(section.fields).length >= 4
                                            ? "xl:grid-cols-4"
                                            : Object.keys(section.fields).length >= 3
                                                ? "lg:grid-cols-3"
                                                : Object.keys(section.fields).length >= 2
                                                    ? "sm:grid-cols-2"
                                                    : "grid-cols-1"
                                            }`}
                                    >
                                        {section.fields.map((field) => (
                                            <div key={field.key} className="space-y-1">
                                                <dt className="text-sm text-gray-500">{field.label}</dt>
                                                <dd className="text-base font-medium text-gray-900">
                                                    {getValueByPath(
                                                        props.data,
                                                        field.key,
                                                        field.emptyValue || "-"
                                                    )}
                                                </dd>
                                            </div>
                                        ))}
                                    </dl>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
