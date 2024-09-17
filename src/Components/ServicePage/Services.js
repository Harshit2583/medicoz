import React from 'react'
import DiseaseList from './DiseaseList'
import DiseaseForm from './DiseaseForm'

const Services = () => {
  return (
    <div className="h-screen body-bg pt-32 px-20 flex justify-between">
      <DiseaseList />
      <DiseaseForm />
    </div>
  )
}

export default Services