/** @format */

import News_hero from './hero';
import Journeys from './news_details_jorneys';
import News_dolos from './news_dolo';
import News_lastimg from './news_last';

export default function News_body() {
  return (
    <div className="w-3/4 max-xl:w-full  ">
      <News_hero />
      <Journeys />
      <News_dolos />
      <News_lastimg />
    </div>
  );
}
