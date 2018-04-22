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
    flex: '0 0 46%',
    padding: '1%',
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  link: {
    color: colors.blue,
    textDecoration: 'none',
  },
});

const About = () => (
  <div className={css(styles.aboutPage)}>
    <div className={css(CommonStyles.container, styles.container)}>
      <div className={css(styles.column)}>
        <div className={css(styles.header)}>Summoner Expert</div>
        <div className={css(styles.body)}>{
          "Summoner Expert is a conversational assistant for League of Legends. It has information on all \
          the champions in the current patch across different elos and roles and stores every match played \
          in NA ranked solo queue for in depth summoner information. You can go into chat and use \
          the conversation explorer to discover all the available commands."
        }</div>
      </div>
      <div className={css(styles.column)}>
        <div className={css(styles.header)}>Why another LoL site?</div>
        <div className={css(styles.body)}>{
          "There are a number of great LoL sites that also have the same information on champions and summoners. \
          The goal of SE is to make getting the information you need fast and intuitive. If you want to know who counters \
          a particular champ the fastest way is to just ask and that's where SE comes in."
        }</div>
      </div>
      <div className={css(styles.column)}>
        <div className={css(styles.header)}>Is it accurate?</div>
        <div className={css(styles.body)}>{
          "For champion information, SE currently uses the great API provided by Champion.gg. Summoner information \
          comes from our own system which is updated every hour and tracks all ranked solo matches in NA from the start of the current season."
        }</div>
      </div>
      <div className={css(styles.column)}>
        <div className={css(styles.header)}>Why did it not understand me?</div>
        <div className={css(styles.body)}>{
          "Summoner Expert uses machine learning to expand its understanding of how players ask about different information. \
          It will continue to be trained based on the questions people ask and get better all the time. Try again soon!"
        }</div>
      </div>
      <div className={css(styles.column)}>
        <div className={css(styles.header)}>Try it out</div>
        <div className={css(styles.body)}>{
          "Summoner Expert is available here on the web through the online conversation tool, as well as \
          through Facebook Messenger, Twitter DMs, and Google Assistant. Just lookup Summoner Expert and get started!"
        }</div>
      </div>
      <div className={css(styles.column)}>
        <div className={css(styles.header)}>Get involved</div>
        <span className={css(styles.body)}>{
          "There are many great features we have planned and we would welcome a helping hand! If the project interests you and \
          you have experience in web development, design, machine learning, copy writing, social media management or just want to give feedback reach out to "
        }</span>
        <a className={css(styles.link)} href="mailto:dan@summonerexpert.com">dan@summonerexpert.com</a>
      </div>
    </div>
  </div>
);

export default About;
