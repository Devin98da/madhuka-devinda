import Biscuits from '../Assets/biscuits.jpg';
// import IMG2 from '../Assets/portfolio2.jpg';
// import IMG3 from '../Assets/portfolio3.jpg';
// import IMG4 from '../Assets/portfolio4.jpg';

export const ProjectsData = [
  {
    id: 1,
    title: 'Biscuits',
    summary:"This is a surrival first-person horror game, released on Itch.io.",
    // summary_list:{
    //   1:""
    //   1:"Full game creation."
    // },
    image: Biscuits,
    github: 'https://github.com',
    demo: 'https://keema98.itch.io/biscuits',
    platform: 'Windows PC',
    engine: 'Unity',
    language: 'C#',
    tool_used: 'Photoshop, Camtasia',
    duration: '4 months',
    completoin: '2023 September',
    team_size: '1',
    role: 'Story writing, level design, game design, all gameplay scripting, enemy AI, voice overs',
    overview: {
      1: "It combines exciting combat against assassins and people who can't escape the punishment, horror activities like jumpscares, scary sounds  , cutscenes which tell the story and a narrative that tells the story of a person who tells the story of a person who get punish by the guardian of the nature for  involving to destroy the nature by throwing things to the nature.",
      2: "You play as Dave, and he came from the city to spend a camping with his freinds are called Ben, Ellie and his girlfreind Cara. While Dave explore the nature, he threw things which he used to the nature. Later that night, he was alone in the camp. The punishment begins with bringing Max into the punishment Maze by Guardian of the nature. He has to find all the trash, he threw and should make alive the tree again by using those trash. Finaly, he has to prove that he love the nature and protect it by defeating the assassins."
    },
    project_design_goals: {
      1: 'Design and develop a complete big game start to end.',
      2: 'Demonstrate skills in scripting and develop story based games.',
      3: 'Identify the challenges while game is developed such as optimization, scripting, bug fixing, etc.',
    },
    design_analyse_doc: '',
    game_trailor: '',
    detailed_info: {
      info: {
        1: "Lost Worlds is a short action game built in UDK with a 3D isometric camera view. It combines exciting combat, environment puzzles, and a narrative that tells the story of a galaxy where humanity mysteriously and suddenly vanished 1000 years ago leaving everything they created behind. Humanity's robotic creations, the Mechlons, now rule the galaxy using their abandoned cities and ships.You play as Max, a scrappy andemotional Mechlon who seeks to discover humanity's fate by searching planetary ruins before the profiteering Dominus Corporation can strip them of their clues and riches. After discovering an uncharted planet, Max and his trusty side-kick Proxy, set off to finally discover the first piece of the puzzle that will reveal humanity's fate and the future fate of the Mechlons.",
        2: ''
      },
      level_map: {
        img: Biscuits,
        map_info: ''
      },
      Level_details: {
        1: '"Ascension" is approximately seven minutes of non-stop, over-the-top action. You take on the role of Sgt. Paul Jackson with a small squad of U.S. Marines led by Lt. Vasquez and SSgt. Griggs. The city is a warzone, and you are running out of time before the enemies extract the VIP.',
        2: "The level starts out with a 'slam zoom' introduction right into a Jeep. I wanted players to get into the action as quickly as possible to grab their attention, so the narrative is setup over radio communications before a surprise RPG shot causes the Jeep to swerve out of the way.",
        3: "You then fight through a narrow alley into a larger battlefield with a downed and bisected Chinook helicopter as the landmark piece. Enemies arrive in a helicopter and fastrope down to reinforce the starting forces. This battlefield also contains destructible vehicles so cover is a temporary luxury as you must jump from cover to cover. This helps create a more intense combat experience.",
        4: "Another alley fight ensues with a dramatic enemy jeep entrance busting through a wall. After this alley, you reach the staging area of a construction site. The enemy helicopter arrives and you must fight your way to the half-finished building's roof to stop them from extracting the VIP via that helicopter.",
        5: "After entering the building and climbing the stairs, an enemy surprises you by pushing you out of the building with a table. Upon waking up from the shock, you discover SSgt. Griggs stabbing the table pusher and telling you to use the rope that will take you to the roof. I specifically lined up this scene so that you cannot miss the box and rope. The box even has fire on it that drops directly to the ground to guide your eyes to where you need to stand.",
        6: "Once you use the rope, you are taken quickly to the roof and enter slow motion time. Enemies backstep and turn in surprise while another is using the VIP as a human shield. You shoot them just as SSgt. Griggs and 2ndLt. Roycewicz arrive. Roycewicz readies the helicopter to use to extract the VIP while you and SSgt. Griggs lay down covering fire during the final battle, the last stand",
        7: "The last stand begins as enemies begin to swarm the building your team now holds. The music and increasingly panicked voiceover, and many enemies armed with RPG's create an intense combat scenario. A wave of enemies arrives via fastrope helicopter and breaches a wall creating a second source of enemies. After nearly losing to the enemy forces, 2nd Platoon's tank, Warpig, blasts through a wall and friendly marines pour in to save the day. With the situation under control, you then board the helicopter with SSgt. Griggs and the VIP to fly to HQ and find out what intel he knows."
      },
      level_design_building: {
        1: 'Created the story based on the short film film that we made and level concept.',
        2: 'The game is designed so that the player does not get lost in the level.',
        3: 'Re-used game models and textures for decoration.',
        4: 'Re-used game special effects such as smoke.',
      },
      combat: {
        1: 'Player has a pistol and a stick to fight with enemies.',
        2: 'Escaped guardian of the nature by using ghost tree.',
        3: 'Balancing AI enemies to play the game without more difficult.',
      },
      story_dialog: {
        1: 'Wrote dialogues to tell the story.',
        2: 'Recorded and edited voice-overs.',

      },
      dramatic_moments: {
        1: 'Player saw his girlfrend illusion.',
        2: 'Find a cola can and explore it more.',
        3: 'Watching a guilty man is punished by the guardian of the nature.',
        4: 'Meet a dying police man and he explain what happend to you.',
        5: 'Guardian of the nature talk to player in the middle of the maze.',
        6: 'Player find his girlfreind running toward him and conversation.',
        7: 'Player see a woman walking and he follows her',
        8: 'After collect all trash, player can make alive dying tree, using those trash and guardian give last test to him'
      },
      scripting: {
        1: 'Player movement (WASD - walk, WASD + SHIFT - run).',
        2: 'Shooting and hitting',
        3: 'Damage and healing system',
        4: 'Player pick up objects, interaction and inventory.',
        5: "Different enemy AIs for assassins, guardian of the nature and people who can't escape the punishment",
        6: 'Saving system.',
        7: 'Jumpscares, ambient sounds and cutscenes'
      },
      playtesting_iteration: {
        1: 'Test game mechanics after a mechanic is finished.',
        2: 'Get feedbacks and improve the game with experienced and inexperienced first person players.',
      }

    }
  },
  // {
  //   id: 2,
  //   image: IMG2,
  //   title: 'Today is not my birthday',
  //   github: 'https://github.com',
  //   demo: 'https://keema98.itch.io/biscuits',
  //   platform: 'Windows PC',
  //   engine: 'Unity',
  //   language: 'C#',
  //   tool_used: 'Photoshop, Camtasia',
  //   duration: '4 months',
  //   completoin: '2023 September',
  //   team_size: '1',
  //   role: 'Story writing, level design, game design, all gameplay scripting, enemy AI, voice overs',
  //   overview: {
  //     1: "It combines exciting combat against assassins and people who can't escape the punishment, horror activities like jumpscares, scary sounds  , cutscenes which tell the story and a narrative that tells the story of a person who tells the story of a person who get punish by the guardian of the nature for  involving to destroy the nature by throwing things to the nature.",
  //     2: "You play as Dave, and he came from the city to spend a camping with his freinds are called Ben, Ellie and his girlfreind Cara. While Dave explore the nature, he threw things which he used to the nature. Later that night, he was alone in the camp. The punishment begins with bringing Max into the punishment Maze by Guardian of the nature. He has to find all the trash, he threw and should make alive the tree again by using those trash. Finaly, he has to prove that he love the nature and protect it by defeating the assassins."
  //   },
  //   project_design_goals: {
  //     1: 'Design and develop a complete big game start to end.',
  //     2: 'Demonstrate skills in scripting and develop story based games.',
  //     3: 'Identify the challenges while game is developed such as optimization, scripting, bug fixing, etc.',
  //   },
  //   design_analyse_doc: '',
  //   game_trailor: '',
  //   detailed_info: {
  //     info: {
  //       1: "Lost Worlds is a short action game built in UDK with a 3D isometric camera view. It combines exciting combat, environment puzzles, and a narrative that tells the story of a galaxy where humanity mysteriously and suddenly vanished 1000 years ago leaving everything they created behind. Humanity's robotic creations, the Mechlons, now rule the galaxy using their abandoned cities and ships.You play as Max, a scrappy andemotional Mechlon who seeks to discover humanity's fate by searching planetary ruins before the profiteering Dominus Corporation can strip them of their clues and riches. After discovering an uncharted planet, Max and his trusty side-kick Proxy, set off to finally discover the first piece of the puzzle that will reveal humanity's fate and the future fate of the Mechlons.",
  //       2: ''
  //     },
  //     level_map: {
  //       img: Biscuits,
  //       map_info: ''
  //     },
  //     Level_details: {
  //       1: '"Ascension" is approximately seven minutes of non-stop, over-the-top action. You take on the role of Sgt. Paul Jackson with a small squad of U.S. Marines led by Lt. Vasquez and SSgt. Griggs. The city is a warzone, and you are running out of time before the enemies extract the VIP.',
  //       2: "The level starts out with a 'slam zoom' introduction right into a Jeep. I wanted players to get into the action as quickly as possible to grab their attention, so the narrative is setup over radio communications before a surprise RPG shot causes the Jeep to swerve out of the way.",
  //       3: "You then fight through a narrow alley into a larger battlefield with a downed and bisected Chinook helicopter as the landmark piece. Enemies arrive in a helicopter and fastrope down to reinforce the starting forces. This battlefield also contains destructible vehicles so cover is a temporary luxury as you must jump from cover to cover. This helps create a more intense combat experience.",
  //       4: "Another alley fight ensues with a dramatic enemy jeep entrance busting through a wall. After this alley, you reach the staging area of a construction site. The enemy helicopter arrives and you must fight your way to the half-finished building's roof to stop them from extracting the VIP via that helicopter.",
  //       5: "After entering the building and climbing the stairs, an enemy surprises you by pushing you out of the building with a table. Upon waking up from the shock, you discover SSgt. Griggs stabbing the table pusher and telling you to use the rope that will take you to the roof. I specifically lined up this scene so that you cannot miss the box and rope. The box even has fire on it that drops directly to the ground to guide your eyes to where you need to stand.",
  //       6: "Once you use the rope, you are taken quickly to the roof and enter slow motion time. Enemies backstep and turn in surprise while another is using the VIP as a human shield. You shoot them just as SSgt. Griggs and 2ndLt. Roycewicz arrive. Roycewicz readies the helicopter to use to extract the VIP while you and SSgt. Griggs lay down covering fire during the final battle, the last stand",
  //       7: "The last stand begins as enemies begin to swarm the building your team now holds. The music and increasingly panicked voiceover, and many enemies armed with RPG's create an intense combat scenario. A wave of enemies arrives via fastrope helicopter and breaches a wall creating a second source of enemies. After nearly losing to the enemy forces, 2nd Platoon's tank, Warpig, blasts through a wall and friendly marines pour in to save the day. With the situation under control, you then board the helicopter with SSgt. Griggs and the VIP to fly to HQ and find out what intel he knows."
  //     },
  //     level_design_building: {
  //       1: 'Created the story based on the short film film that we made and level concept.',
  //       2: 'The game is designed so that the player does not get lost in the level.',
  //       3: 'Re-used game models and textures for decoration.',
  //       4: 'Re-used game special effects such as smoke.',
  //     },
  //     combat: {
  //       1: 'Player has a pistol and a stick to fight with enemies.',
  //       2: 'Escaped guardian of the nature by using ghost tree.',
  //       3: 'Balancing AI enemies to play the game without more difficult.',
  //     },
  //     story_dialog: {
  //       1: 'Wrote dialogues to tell the story.',
  //       2: 'Recorded and edited voice-overs.',

  //     },
  //     dramatic_moments: {
  //       1: 'Player saw his girlfrend illusion.',
  //       2: 'Find a cola can and explore it more.',
  //       3: 'Watching a guilty man is punished by the guardian of the nature.',
  //       4: 'Meet a dying police man and he explain what happend to you.',
  //       5: 'Guardian of the nature talk to player in the middle of the maze.',
  //       6: 'Player find his girlfreind running toward him and conversation.',
  //       7: 'Player see a woman walking and he follows her',
  //       8: 'After collect all trash, player can make alive dying tree, using those trash and guardian give last test to him'
  //     },
  //     scripting: {
  //       1: 'Player movement (WASD - walk, WASD + SHIFT - run).',
  //       2: 'Shooting and hitting',
  //       3: 'Damage and healing system',
  //       4: 'Player pick up objects, interaction and inventory.',
  //       5: "Different enemy AIs for assassins, guardian of the nature and people who can't escape the punishment",
  //       6: 'Saving system.',
  //       7: 'Jumpscares, ambient sounds and cutscenes'
  //     },
  //     playtesting_iteration: {
  //       1: 'Test game mechanics after a mechanic is finished.',
  //       2: 'Get feedbacks and improve the game with experienced and inexperienced first person players.',
  //     }

  //   }
  // },
]