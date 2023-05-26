'use client'

import ProductImage from "@/app/components/ProductImage"
import { Dialog } from '@headlessui/react'
import { StarIcon as StarIconOutline } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/24/solid'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

const Modal = () => {
  let [isOpen, setIsOpen] = useState(true)
  const [product, setProduct] = useState<Product>()
  const id = useParams().id
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  
  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true)
      const res = await fetch(`https://fakestoreapi.com/products/${id}`)
      const product = await res.json()

      setProduct(product)

      setLoading(false)
    }

    fetchProduct()
  },[id])


  
  return (
    <Dialog
      open={isOpen}
      onClose={() => {setIsOpen(false); router.back()
      }}

      className="relative z-50"
    >
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      {/* Full-screen container to center the panel */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        {/* The actual dialog panel  */}
        <Dialog.Panel className="mx-auto max-w-3xl rounded bg-white p-10">
          {loading ? (
            <Box sx={{ width:400}}>
              <Skeleton />
              <Skeleton animation="wave" />
              <Skeleton animation={false} />
            </Box>
            ) : (
            <div className="flex gap-x-8 h-96">
              {product?.image && (
                <div className="relative w-72 h-full hidden md:inline">
                  <ProductImage product={product} fill />
                </div>
              )}

              <div>
                <h4 className="font-semibold">{product?.title}</h4>
                <p className="font-medium text-sm">${product?.price}</p>

                <div className="flex gap-x-2 mt-4 items-center">
                  {product?.rating.rate}
                  {product?.rating.rate && (
                    <div className="flex items-center">
                      {Array.from({length: Math.floor(product.rating.rate) },(_, i) => (<StarIcon key={i} className="h-4 w-4 text-yellow-500"/>))}
                      {Array.from({length: 5 - Math.floor(product.rating.rate)}, (_, i) => (<StarIconOutline key={i} className="h-4 w-4 text-yellow-500"/>))}
                    </div>
                  )}
                  <p className="ml-16 text-blue-500 hover:underline cursor-pointer text-xs">
                      See all {product?.rating.count} review
                    </p>
                </div>


                <p className="w-80 mt-4">{product?.description}</p>
                <button onClick={() => setIsOpen(false)}>
                  Presioname para ver mas
                </button>
              </div>
            </div>
          )}
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}

export default Modal
