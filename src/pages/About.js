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
});

const About = () => (
  <div className={css(styles.aboutPage)}>
    <div className={css(CommonStyles.container)}>
      <div className={css(styles.header)}>What is Summoner Expert?</div>
      <div className={css(styles.body)}>
        Summoner Expert is a conversational assistant for League of Legends. Players
        can use Summoner Expert to look up stats for champions, items, other players
        and more.
      </div>
      <div className={css(styles.header)}>Why did we make it?</div>
      <div className={css(styles.body)}>{
        "There are loads of great League of Legends tools out there, so why make another one? \
        A lot of the time what we want when we go to a site like champion.gg or na.op.gg \
        is an answer to a certain question."
      }</div>
      <div className={css(styles.body)}>{
        "If you're sitting in champ select with a full bladder and the 30 second timer to pick \
        your champ is down to 10 seconds because you were too busy scrolling through posts on Reddit \
        then time is critical and going to a site, clicking through a couple links and scrolling to \
        the section that gives you a list of counters to that busted champ from the latest patch isn't an option."
      }</div>
      <div className={css(styles.body)}>{
        "Sometimes you throw out a last ditch attempt into team chat and ask who counters them before pulling out \
        your Hail Mary Teemo Mid lane and just in time some friendly teammate recommends a champ you play and you \
        lock in."
      }</div>
      <div className={css(styles.body)}>{
        "Summoner Expert is that friendly teammate and he is always immediately available to answer your questions with \
        the most current information."
      }</div>
      <div className={css(styles.header)}>Is it Accurate?</div>
      <div className={css(styles.body)}>{
        "We aren't doing any number crunching ourselves. All of the information for matchups, counters and other stats \
        are coming directly from champion.gg thanks to their awesome public data so you can count on Summoner Expert being \
        accurate and up to date."
      }</div>
      <div className={css(styles.header)}>Where is it Available?</div>
      <div className={css(styles.body)}>{
        "Summoner Expert is available here on the web through the online conversation tool, as well as \
        through Facebook messenger, Twitter DMs, and Google Assistant. Just lookup Summoner Expert and start \
        chatting!"
      }</div>
    </div>
  </div>
);

export default About;
