import Dropdown from "../dropdown/Dropdown";



import { CheckCircleIcon, ChevronRightIcon, EnvelopeIcon } from '@heroicons/react/20/solid'


const applications = [
    {
      applicant: {
        name: 'Ricardo Cooper',
        email: 'ricardo.cooper@example.com',
        imageUrl:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      job_position: 'Senior React Devolopment',
      position: 'Development',
      href: '#',
    },
    {
      applicant: {
        name: 'Kristen Ramos',
        email: 'kristen.ramos@example.com',
        imageUrl:
          'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      job_position: 'Technical Consultant',
      position: 'Project/Product management',
      href: '#',
    },
     {
      applicant: {
        name: 'Ted Fox',
        email: 'ted.fox@example.com',
        imageUrl:
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      job_position: "UX Consultant",
      position: 'Design',
      href: '#',
    },
]

const PositionList = () => {
    return(
            
            <div className="max-w-full px-4 lg:pl-[54px] py-20">
                <div className="xl:mr-96 lg:mr-40">
                    <h1 className="text-3xl text-black font-medium mb-10">Open Positions</h1>
                    <p className="text-xl text-black font-base mb-10">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,</p>
                    <div className="flex items-center gap-10">

                        <h3>Filter by deparment</h3>
                        <Dropdown/>
                    </div>
            </div> 
              <div className="overflow-hidden bg-white shadow sm:rounded-md py-12">
 <ul role="list" className="divide-y divide-gray-200">
        {applications.map((application) => (
          <li key={application.applicant.email}>
            <a href={application.href} className="block hover:bg-gray-50">
              <div className="flex items-center px-4 py-4 sm:px-6">
                <div className="flex min-w-0 flex-1 items-center">
                  <div className="flex-shrink-0">
                    <img className="h-12 w-12 rounded-full" src={application.applicant.imageUrl} alt="" />
                  </div>
                  <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                    <div>
                      <p className="truncate text-sm font-medium text-indigo-600">{application.applicant.name}</p>
                      <p className="mt-2 flex items-center text-sm text-gray-500">
                        <EnvelopeIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                        <span className="truncate">{application.applicant.email}</span>
                      </p>
                    </div>
                    <div className="hidden md:block">
                      <div>
                        <p className="text-sm text-gray-900">
                          {application.job_position}
                        </p>
                        <p className="mt-2 flex items-center text-sm text-gray-500">
                          <CheckCircleIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-green-400" aria-hidden="true" />
                          {application.position}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                 <div>
                  <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
              </div>
        </div>
                


    )
}
export default PositionList;
