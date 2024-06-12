import NewsList from '../../../../../components/NewsList'
import { DUMMY_NEWS, MONTHS } from '../../../../../lib/constants/dummy-news'
import {
    getAvailableNewsMonths,
    getAvailableNewsYears,
    getNewsForYear,
    getNewsForYearAndMonth,
} from '../../../../../lib/utils/news'
import Link from 'next/link'
import React from 'react'

const FilteredNewsPage = ({ params }) => {
    const { filter } = params

    const selectedYear = filter?.[0]
    const selectedMonth = filter?.[1]

    let news
    let links = getAvailableNewsYears()

    if (selectedYear && !selectedMonth) {
        news = getNewsForYear(selectedYear)
        links = getAvailableNewsMonths(selectedYear)
    }

    if (selectedYear && selectedMonth) {
        news = getNewsForYearAndMonth(selectedYear, selectedMonth)
        links = []
    }

    const newsContent =
        news && news.length > 0 ? (
            <NewsList news={news} />
        ) : (
            <p>No news found for the selected period.</p>
        )

    // That's clunky..
    if (
        (selectedYear &&
            !getAvailableNewsYears().includes(Number(selectedYear))) ||
        (selectedMonth &&
            !getAvailableNewsMonths(selectedYear).includes(
                Number(selectedMonth)
            ))
    ) {
        throw new Error('Invalid filter')
    }

    return (
        <>
            <header id='archive-header'>
                <nav>
                    <ul>
                        {links.map(link => {
                            const href = selectedYear
                                ? `/archive/${selectedYear}/${link}`
                                : `/archive/${link}`
                            return (
                                <li key={link}>
                                    <Link href={href}>
                                        {selectedYear ? MONTHS[link] : link}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </header>
            {newsContent}
        </>
    )
    // const newsForThisYear = getNewsForYear(year)
    // return <NewsList news={newsForThisYear} />
}

export default FilteredNewsPage
