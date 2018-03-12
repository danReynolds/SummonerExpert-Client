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
  }
});

const About = () => (
  <div className={css(styles.aboutPage)}>
    <div className={css(CommonStyles.container, styles.container)}>
      <div className={css(styles.column)}>
        <div className={css(styles.header)}>Summoner Expert</div>
        <div className={css(styles.body)}>
          Summoner Expert is a conversational assistant for League of Legends. Players
          can use Summoner Expert to look up stats for champions, items, and other players.
        </div>
      </div>
      <div className={css(styles.column)}>
        <div className={css(styles.header)}>What it can do</div>
        <div className={css(styles.body)}>{
          "It has information on all the champions in the current patch across different elos and roles and \
          stores every match played in NA for in depth summoner information. You can go into chat and use \
          the conversation explorer to delve into the available commands."
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
        <div className={css(styles.header)}>Try it out</div>
        <div className={css(styles.body)}>{
          "Summoner Expert is available here on the web through the online conversation tool, as well as \
          through Facebook Messenger, Twitter DMs, and Google Assistant. Just lookup Summoner Expert and get started!"
        }</div>
      </div>
      <div className={css(styles.column)}>
        <div className={css(styles.header)}>Get involved</div>
        <div className={css(styles.body)}>{
          "There are many great features we have planned and we would welcome a helping hand! If the project interests you and \
          you have experience in web development, design, machine learning, copy writing or social media management reach out to dan@summonerexpert.com"
        }</div>
      </div>
    </div>
  </div>
);

export default About;
