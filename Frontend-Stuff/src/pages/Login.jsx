import dynamic from 'next/dynamic'
import React from 'react';
import { Link } from 'react-router-dom';
import VoxelDogLoader from '../components/Dog/voxel-dog-loader'
import { Box, Container } from '@chakra-ui/react'

const LazyVoxelDog = dynamic(() => import('../components/Dog/voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

export default function Login() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
    <Box as="main" pb={8}>
      <Container maxW="container.md" pt={14}>
        <LazyVoxelDog />
      </Container>
    </Box>

        <div className='bg-gray-800 flex flex-col justify-center'>
            <form className='max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8'>
                <h2 className='text-4xl dark:text-white font-bold text-center'>SIGN IN</h2>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Username</label>
                    <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" />
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Password</label>
                    <input className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" />
                </div>
                <div className='flex justify-between text-gray-400 py-2'>
                    <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember Me</p>
                    <p>Forgot Password</p>
                </div>
                <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>
                      <Link to="/dashboard">Please Log</Link>
                      <Link to="/signin"> In</Link>
                </button>
                <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>
                      <Link to="/signin">Sign Up</Link>
                </button>
            </form>
        </div>
    </div>
  )
}