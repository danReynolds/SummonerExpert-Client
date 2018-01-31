import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import CommonStyles, { colors, fonts } from '../assets/styles/Common';

const styles = StyleSheet.create({
  aboutPage: {
    color: colors.white,
    fontSize: '1.25rem',
    overflow: 'auto',
    margin: '2rem 0',
  },
  header: {
    ...fonts.header,
    margin: '1rem 0',
  },
  body: {
    margin: '1rem 0',
    lineHeight: 1.5,
  },
  column: {
    width: '50%',
  }
});

const About = () => (
  <div className={css(styles.aboutPage)}>
    <div className={css(CommonStyles.container)}>
      <div className={css(styles.header)}>Summoner Expert</div>
      <div className={css(styles.body)}>
        Summoner Expert is a conversational assistant for League of Legends. Players
        can use Summoner Expert to look up stats for champions, items, and other players.
      </div>
      <div className={css(styles.header)}>Why you might find it useful</div>
      <div className={css(styles.body)}>{
        "If you're sitting in champ select with a full bladder and the 30 second timer to pick \
        your champ is down to 10 seconds because you were too busy scrolling through posts on Reddit \
        then time is critical and going to a site, clicking through a couple links and scrolling to \
        the section that gives you a list of counters to that busted champ from the latest patch isn't an option."
      }</div>
      <div className={css(styles.body)}>{
        "Sometimes you throw out a last ditch attempt into team chat and ask who counters them before pulling out \
        your Hail Mary Teemo mid lane and just in time some friendly teammate recommends a champ you play and you \
        lock in."
      }</div>
      <div className={css(styles.body)}>{
        "Summoner Expert is that friendly teammate and he is always immediately available to answer your questions with \
        the most current information."
      }</div>
      <div className={css(styles.header)}>Try it out</div>
      <div className={css(styles.body)}>{
        "Summoner Expert is available here on the web through the online conversation tool, as well as \
        through Facebook messenger, Twitter DMs, and Google Assistant. Just lookup Summoner Expert and get started!"
      }</div>
    </div>
  </div>
);

export default About;
