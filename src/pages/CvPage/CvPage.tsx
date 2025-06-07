import { WorkExperience } from '@/components/cv'
import Info from '@/components/cv/Info'

export default function CvPage() {
  return (
    <>
      <div className="min-h-dvh min-w-[320px] bg-white text-gray-800 dark:bg-gray-950 dark:text-gray-100">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-12">
            <Info />

            <div className="mx-auto max-w-2xl space-y-16 p-5 md:col-span-8 md:p-10">
              <WorkExperience />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
