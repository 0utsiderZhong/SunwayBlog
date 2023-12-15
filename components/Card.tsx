import Image from './Image'
import Link from './Link'
import favoritesData from "@/data/favoritesData";

const Card = ({ title, linkList, imgSrc, extensions }) => (
  <div className="md max-w-[1500px] p-4 md:w-5/6">
    <div className={`${imgSrc && 'h-full'}  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}>
      <div className="p-6">
        <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
            {title}
        </h2>
        {linkList.map((item, _) => (
            <div>
                <a href={item.href} className="prose mb-3 max-w-none text-blue-500 dark:text-gray-400">{item.description}</a>
                <br/>
            </div>
        ))}
        {linkList && (
          <Link
            href={extensions}
            className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label={`Link to ${title}`}
          >
            Get more &rarr;
          </Link>
        )}
      </div>
    </div>
  </div>
)

export default Card
