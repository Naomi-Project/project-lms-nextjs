"use client"
import ButtonImport from '@/components/ui/buttonImport'
import { useUserPayloadQuery } from '@/graphql/generated'
import React from 'react'

const ButtonImportTeacher = () => {
  const { data: payload } = useUserPayloadQuery()
  const schoolid = payload?.me.schoolId ?? null
  return (
    <ButtonImport endpoint="/import/teachers" idSchool={schoolid ?? ''} />
  )
}

export default ButtonImportTeacher