import React from 'react'
import { Button } from './ui/button'

const Subscription = ({grad}) => {
  return (
    <>
    <div>
    <div className="flex justify-center mt-6 px-4 max-sm:w-full sm:px-0">
      <div className={`relative w-full max-w-xl p-[2px] rounded-xl bg-gradient-to-r ${grad}`}>
        <div className={`absolute -top-2 left-4 w-[120px] sm:w-[145px] rounded-[10px] bg-gradient-to-r ${grad}`}>
          <p className="text-white text-center text-[12px] sm:text-[13px]">
            7-days Free Trial
          </p>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-xl p-4 sm:p-6 h-fit">
          <div className="flex justify-between text-[15px] sm:text-[16px]">
            <div>
              <p className="font-semibold">Premium</p>
              <p>Up to 6 people</p>
            </div>
            <p className="font-medium">CA$59.99/Year</p>
          </div>
        </div>
      </div>
    </div>
    <div className=" flex flex-col items-center px-4 text-center">
      <div className="text-[#5C5757] text-[14px] sm:text-[15px] max-w-lg">
        <p>
          After your free trial, the yearly subscription is CA$59.99 and
          automatically renews each year until cancelled.
        </p>
        <p className="mt-1">Terms | Cancel</p>
      </div>
      <Button
        className={`bg-gradient-to-r ${grad} mt-6 max-md:w-full  lg:px-64 md:px-56 py-4`}
      >
        Continue
      </Button>
    </div>
    </div>
    </>
  )
}

export default Subscription