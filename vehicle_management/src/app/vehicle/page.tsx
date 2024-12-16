import React from 'react'
import DynamicTable from '../components/TableWithSearch/TableWithSearch'

const page = () => {
    const thing=[
        {'id':'1','Vehicle Name':'BMW-89','Status':'102','Last update':'Department'},
        {'id':'1','Vehicle Name':'KARET','Status':'102','Last update':'Department'},
        {'id':'1','Vehicle Name':'JKKL','Status':'104','Last update':'Department'},
        {'id':'1','Vehicle Name':'mJKJ','Status':'104','Last update':'Department'},
        {'id':'1','Vehicle Name':'ENTO','Status':'102','Last update':'Department'}
    ]
  return (
    <DynamicTable data={thing} path={"vehicle/new/"}/>
  )
}

export default page