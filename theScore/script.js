import http from 'k6/http';
import { fail } from 'k6';
import { check } from 'k6';

export let options = {
  discardResponseBodies: false,
  scenarios: {
    topPlayer: {
      executor: 'per-vu-iterations',
      exec: 'topPlayer',
      vus: 1,
      //duration: '1s',
      iterations: 1,
      tags: { my_custom_tag: 'topPlayer' },
      env: { MYVAR: 'topPlayer' },
    },
    topTeam: {
      executor: 'per-vu-iterations',
      exec: 'topTeam',
      vus: 1,
      //duration: '1s',
      iterations: 1,
      //startTime: '2s',
      //maxDuration: '1m',
      tags: { my_custom_tag: 'topTeam' },
      env: { MYVAR: 'topTeam' },
    },
  },
};

export function topPlayer() {
  if (__ENV.MYVAR != 'topPlayer') fail();
  let response1 = http.get('https://datacrunch.9c9media.ca/statsapi/sports/basketball/leagues/NBA/leaders?brand=tsn&type=json');
  check(response1, {
  'response code was 200': (response1) => response1.status == 200,
  });
  console.log('Top Ten Individuals'  + '    '  + 'Average Points per Game');

    var responseBody = response1.json().NBA.regularSeason[0].leaderMap.pointsPerGame;

  for(var i =0; i < responseBody.length; i++)
      {
          console.log(responseBody[i].player.displayName  +  '          '  + responseBody[i].value );
      }
}

export function topTeam() {
  if (__ENV.MYVAR != 'topTeam') fail();
  let res = http.get('https://datacrunch.9c9media.ca/statsapi/sports/basketball/leagues/nba/standings/conferences?brand=tsn&tournamentId=&type=json');
  check(res, {
  'response code was 200': (res) => res.status == 200,
  });
  console.log('Top Ten Teams'  + '    '  + 'Standings');

  var responseBodyTeam = res.json();
  var responeTeamStats = responseBodyTeam[0].competitorStats;

  for(var i =0 ; i < 10; i++)
      {
          console.log(responeTeamStats[i].competitor.name  +  '          '  + responeTeamStats[i].stats.place );
      }
}
