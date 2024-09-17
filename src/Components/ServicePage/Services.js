import React from 'react'
import DiseaseList from './DiseaseList'
import DiseaseForm from './DiseaseForm'
import DepressionForm from './DepressionForm'

const Services = () => {
  return (
    <div className=" body-bg pt-32 px-20 flex justify-between">
      <DiseaseList />
      {/* <DiseaseForm /> */}
      <DepressionForm />
    </div>
  )
}

export default Services