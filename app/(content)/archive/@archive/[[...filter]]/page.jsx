import NewsList from '../../../../../components/NewsList'
import { MONTHS } from '../../../../../lib/constants/dummy-news'
import {
    getAvailableNewsMonths,
    getAvailableNewsYears,
    getNewsForYear,
    getNewsForYearAndMonth,
} from '../../../../../lib/utils/news'
import Link from 'next/link'
import React, { Suspense } from 'react'

const FilteredNews = async ({ selectedYear, selectedMonth }) => {
    let news
    if (selectedYear && !selectedMonth) {
        news = await getNewsForYear(selectedYear)
    } else if (selectedYear && selectedMonth) {
        news = await getNewsForYearAndMonth(selectedYear, selectedMonth)
    }

    const newsContent =
        news && news.length > 0 ? (
            <NewsList news={news} />
        ) : (
            <p>No news found for the selected period.</p>
        )

    return newsContent
}

const FilterHeader = async ({ selectedYear, selectedMonth }) => {
    const availableYears = await getAvailableNewsYears()
    let links = availableYears

    if (selectedYear && !selectedMonth) {
        links = getAvailableNewsMonths(selectedYear)
    }

    if (selectedYear && selectedMonth) {
        links = []
    }

    // That's clunky..
    if (
        (selectedYear && !availableYears.includes(selectedYear)) ||
        (selectedMonth &&
            !getAvailableNewsMonths(selectedYear).includes(selectedMonth))
    ) {
        throw new Error('Invalid filter')
    }

    return (
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
    )
}

const FilteredNewsPage = async ({ params }) => {
    const { filter } = params

    const selectedYear = filter?.[0]
    const selectedMonth = filter?.[1]

    return (
        <>
            <Suspense fallback={<p>Loading Filter..</p>}>
                <FilterHeader
                    selectedYear={selectedYear}
                    selectedMonth={selectedMonth}
                />
            </Suspense>
            <Suspense fallback={<p>Loading News..</p>}>
                <FilteredNews
                    selectedYear={selectedYear}
                    selectedMonth={selectedMonth}
                />
            </Suspense>
        </>
    )
}

export default FilteredNewsPage
