import { Card } from "@/components/ui/card";
import { getValueByPath } from "@/lib/getter";
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
    data: T;
    sections: CommonDetailSection<T>[];
}

export function CommonDetailPage<T extends Record<any, any>>(
    props: CommonDetailPageProps<T>
) {
    return (
        <Card>
            <div>
                <Image
                    src={
                        props.image ||
                        ""
                    }
                    width={50}
                    height={50}
                    alt=""
                />
            </div>
            <h1>{props.title}</h1>
            <div>
                {props.sections.map((section) => (
                    <div key={section.label} className="mt-6">
                        <div className="border-b border-dashed border-gray-200 pb-6">
                            <h2 className="text-lg font-bold text-gray-900 mb-4">
                                {section.label}
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
        </Card>
    );
}
