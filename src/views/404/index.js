import React from 'react'
import Layout from '../../layout'

const Error404Page = () => {
  return (
    <Layout>
            <div className='w-full flex items-center flex-col bg-white/10 p-10 rounded-lg mt-10'>
                <h1 className='text-9xl text-green0'>{(404).toLocaleString('fa-ir')}</h1>
                <h1 className='text-4xl text-center leading-relaxed text-green0 mt-8'>صفحه مورد نظر پیدا نشد</h1>
            </div>
    </Layout>
  )
}

export default Error404Page