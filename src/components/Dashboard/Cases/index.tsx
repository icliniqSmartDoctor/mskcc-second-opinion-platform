import { Card, Button } from 'flowbite-react'

function Cases() {

  return (
    <div className='container mx-auto px-10 pt-32'>
      <h4 className='text-base text-black'>Cases</h4>
      <Card className='mt-5 w-9/12 p-0 card-with-no-padding '>
        <div className='flex'>
          <div className='rounded-l-lg h-44 bg-blue-200 w-12 flex items-center justify-center'>
            <p className='-rotate-90 absolute text-blue-700 uppercase tracking-widest'>In progress</p>
          </div>
          <div className='flex w-full'>
            <div className="grid w-4/5 grid-cols-2 gap-4 m-6">
              <div>
                <p className='text-sm text-gray-500'>Patient name</p>
                <p className='text-black text-sm mt-1'>Joseph Martin Andrew</p>
              </div>
              <div>
                <p className='text-sm text-gray-500'>Service</p>
                <p className='text-black text-sm mt-1'>Remote consultation with MSK Doctor(s)</p>
              </div>
              <div>
                <p className='text-sm text-gray-500'>IRN</p>
                <p className='text-black text-sm mt-1'>IC640030357F1D5</p>
              </div>
              <div>
                <p className='text-sm text-gray-500'>Posted on</p>
                <p className='text-black text-sm mt-1'>02-21-2023 at 12:30pm</p>
              </div>
            </div>
            <div className='w-1/5 flex items-center justify-center'>
              <Button className='bg-blue-800 hover:bg-blue-600'>
                View Cases
              </Button>
            </div>
          </div>

        </div>

      </Card>

    </div>
  )
}

export default Cases