(function( $ ) {
  $.freebase = (function() {


var data={"kill":["/music/track","/music/release_track", "/tv/tv_episode", "/music/recording", "/music/composition", "/book/book_edition"],"boring":["/type/object/attribution","/type/object/key","/type/object/mid","/common/topic/notable_properties","/type/object/guid","/type/object/type","/type/object/id","/type/object/creator","/type/object/timestamp","/type/object/permission","/common/topic/alias","/common/topic/article","/common/topic/image","/common/topic/notable_for","/common/topic/notable_types","/common/topic/official_website","/common/topic/topic_equivalent_webpage","/common/topic/topical_webpage","/travel/travel_destination_monthly_climate/month",
"/location/religion_percentage/religion"],"sentence_grammars":[],
"plural_types":["/music/instrument","/business/product_category","/biology/animal","/aviation/aircraft_type","/base/aareas/schema/administrative_area_type","/user/spencermountain/default_domain/type_of_music_group","/geography/geographical_feature_category","/award/award_discipline","/fashion/garment","/interests/collection_category","/organization/organization_type","/geology/rock_type",
"/sports/sports_equipment","/fictional_universe/fictional_organization_type","/user/jamie/default_domain/retail_category","/base/localfood/produce","/base/disaster2/type_of_injury","/architecture/type_of_museum","/automotive/engine_type","/travel/accommodation_feature","/transportation/bridge_type","/food/type_of_dish","/automotive/automotive_class","/geography/mountain_type","/exhibitions/type_of_exhibition","/user/alecf/recreation/park_feature","/event/disaster_type","/meteorology/cloud","/base/events/type_of_festival",
"/american_football/football_position","/base/piercings/piercing_location","/religion/type_of_place_of_worship","/base/birdinfo/type_of_diet","/astronomy/type_of_planetographic_feature","/base/forts/type_of_fort","/travel/accommodation_type","/base/crime/lawyer_type","/base/argumentmaps/type_of_joke","/base/events/type_of_performance","/event/type_of_public_presentation","/user/alexander/toys/toy_type","/user/robert/mobile_phones/input_interface","/baseball/baseball_position","/theater/theater_production_staff_role",
"/soccer/football_position","/music/voice","/base/disaster2/type_of_injury_causing_event","/base/services/exercise_facilities","/conferences/type_of_conference","/base/ecology/type_of_ecosystem","/bicycles/bicycle_type","/basketball/basketball_position","/base/movietheatres/type_of_movie_theatre_cinema","/base/disaster2/type_of_automobile_accident","/ice_hockey/hockey_position","/base/fires/type_of_fire","/base/crime/type_of_criminal_organization","/base/skateboarding/type_of_skateboarding_obstacle",
"/spaceflight/satellite_type","/base/represent/type_of_agent","/user/rcheramy/default_domain/fruit","/user/rcheramy/default_domain/food","/biology/organism_classification","/business/job_title","/medicine/anatomical_structure","/people/profession","/fictional_universe/character_species","/user/rcheramy/default_domain/hockey_team","/ice_hockey/hockey_team","/sports/sports_team","/sports/professional_sports_team","/base/events/event_presenting_organisation","/film/film_genre","/music/compositional_form",
"/medicine/drug_class","/geography/lake_type","/user/akatenev/weapons/weapon","/user/spencermountain/default_domain/stock_character","/base/folklore/mythical_creature"],"category_like":["/american_football/football_position/players","/architecture/architectural_style/architects","/baseball/baseball_position/players","/basketball/basketball_position/players","/basketball/basketball_roster_position/player","/business/competitive_space_mediator/company","/business/industry/companies","/business/market_share/company",
"/comic_strips/comic_strip_creator_duration/creator_of_strip","/dining/cuisine/chefs","/dining/cuisine/restaurant","/education/education/student","/education/field_of_study/academic_departments","/education/field_of_study/academics_in_this_field","/film/film_film_company_relationship/film_company","/food/diet/followers","/ice_hockey/hockey_position/players","/interests/hobby/people_with_this_hobby","/interests/interest/people_with_this_interest","/martial_arts/martial_art/well_known_practitioner",
"/medicine/medical_specialty/hospitals_with_this_specialty","/medicine/medical_specialty/physicians_with_this_specialty","/music/genre/artists","/music/group_membership/member","/music/recording_contribution/contributor","/music/track_contribution/contributor","/olympics/olympic_athlete_affiliation/athlete","/opera/opera_designer_gig/designer","/opera/opera_production_staff_gig/staff_member","/organization/club_interest/clubs","/organization/leadership/person","/organization/organization_board_membership/member",
"/organization/organization_sector/organizations_in_this_sector","/people/profession/people_with_this_profession","/projects/project_participation/participant","/religion/religion/organizations","/soccer/football_position/players","/sports/pro_sports_played/athlete","/sports/sport/leagues","/sports/sport/officials","/sports/sport/team_coaches","/sports/sport/teams","/sports/sports_team_roster/player","/theater/theater_designer_gig/designer","/theater/theater_production_staff_gig/staff_member","/tv/tv_crew_gig/crewmember",
"/tv/tv_producer_episode_credit/producer","/tv/tv_producer_term/producer","/tv/tv_regular_personal_appearance/person","/visual_art/visual_art_form/artists","/government/form_of_government/countries","/people/ethnicity/people","/fictional_universe/character_gender","/fictional_universe/fictional_character/ethnicity","/architecture/structure/architectural_style","/book/book/genre","/book/magazine/genre","/book/short_story/genre","/book/written_work/school_or_movement","/broadcast/content/genre","/broadcast/radio_station/format",
"/comic_books/comic_book_series/genre","/comic_books/comic_book_story/genre","/comic_strips/comic_strip/genre","/computer/software/software_genre","/cvg/computer_videogame/cvg_genre","/film/film/genre","/food/dish/cuisine","/games/game/genre","/internet/website/category","/media_common/netflix_title/netflix_genres","/music/album/genre","/music/music_video/music_video_genre","/opera/opera/genre","/theater/play/genre","/tv/tv_program/genre","/visual_art/artwork/art_genre","/visual_art/artwork/period_or_movement",
"/automotive/model/model_years","/automotive/model_year/examples","/aviation/aircraft_model/aircraft","/award/recurring_competition/individual_competitions","/conferences/conference_series/conference","/cricket/cricket_series/series_events","/cricket/cricket_tournament/events","/film/film_festival/individual_festivals","/food/dish/recipes","/rail/locomotive_class/locomotives_of_this_class","/sports/sports_championship/events","/sports/tournament_event/competitions","/time/recurring_event/instances",
"/fictional_universe/character_occupation/characters_with_this_occupation"],"related_properties":["/influence/influence_node/influenced_by","/location/location/adjoin_s","/influence/influence_node/influenced","/location/location/coterminous_with","/location/location/near","/time/event/included_in_event","/time/event/includes_event","/film/film/subjects","/film/film/sequel","/film/film/prequel","/film/film/directed_by","/film/film/starring","/book/written_work/previous_in_series","/book/written_work/next_in_series",
"/book/written_work/subjects","/visual_art/artwork/art_subject","/visual_art/artwork/belongs_to_series","/education/educational_institution/subsidiary_or_constituent_schools","/education/educational_institution/parent_institution","/organization/organization/sectors","/organization/organization/spun_off_from","/organization/organization/spin_offs","/organization/organization/parent","/organization/organization/child","/biology/organism_classification/higher_classification","/biology/organism_classification/lower_classifications",
"/biology/organism_classification/child_classifications","/biology/organism_classification/parent_classifications","/sports/sports_facility/teams","/sports/sports_league/championship","/sports/sport/leagues","/sports/sports_team/arena_stadium","/sports/sports_team/location","/sports/sports_team_location/teams","/government/political_party/ideology","/government/political_district/elections","/government/election/winner","/music/track/artist","/time/recurring_event/instances","/people/profession/specializations",
"/people/profession/specialization_of","/music/artist/label","/music/artist/album","/music/release/label","/music/release/album","/music/album/artist","/music/musical_group/member","/music/producer/releases_produced","/base/onephylogeny/type_of_thing/includes","/base/onephylogeny/type_of_thing/included_in","/location/country/capital","/location/country/form_of_government","/location/country/currency_used","/location/country/national_anthem","/aviation/airport/serves","/architecture/structure/architect",
"/geography/lake/cities","/geography/lake/outflow","/geography/lake/inflow","/olympics/olympic_games/host_city","/olympics/olympic_host_city","/business/employment_tenure/company","/film/performance/film","/tv/regular_tv_appearance/series","/people/marriage/spouse","/education/education/specialization","/education/education/major_field_of_study","/location/adjoining_relationship/adjoins","/music/group_membership/group","/celebrities/friendship/friend","/base/popstra/friendship/participant","/people/person/parents",
"/influence/influence_node/peers","/people/person/children","/people/sibling_relationship/sibling","/location/location/contains"],"definate_articles":["/geography/mountain_range","/location/region","/royalty/noble_title","/user/pak21/default_domain/tectonic_plate","/education/university","/education/department","/religion/religious_organization","/user/robinboast/default_domain/historical_period","/travel/tourist_attraction","/comic_books/comic_book_character","/transportation/bridge","/business/shopping_center",
"/base/argumentmaps/intellectual_dispute","/base/argumentmaps/argument","/geography/island_group"],"properties":[{"id":"/american_football/football_conference/teams","n":"football team"},{"id":"/government/government_office_or_title/governmental_body_if_any","n":"office"},{"id":"/american_football/football_division/teams","n":"football team"},{"id":"/american_football/football_division/conference","n":"division"},{"id":"/tv/tv_producer/programs_produced","n":"tv programs"},{"id":"/tv/tv_producer/programs_produced",
"n":"tv shows"},{"id":"/tv/tv_producer/programs_produced","n":"shows"},{"id":"/baseball/baseball_league/teams","n":"baseball teams"},{"id":"/automotive/make/model_s","n":"models"},{"id":"/automotive/make/parent_company","n":"company "},{"id":"/government/governmental_body/offices_positions","n":"offices"},{"id":"/government/governmental_body/members","n":"workers"},{"id":"/government/governmental_body/component_bodies","n":"committees"},{"id":"/aviation/aircraft_owner/aircraft_fleet_composition",
"n":"planes"},{"id":"/aviation/aircraft_owner/aircraft_fleet_composition","n":"airplanes"},{"id":"/aviation/aircraft_owner/aircraft_fleet_composition","n":"aircraft"},{"id":"/american_football/football_coach/coaching_history","n":"teams"},{"id":"/american_football/football_coach/current_team_head_coached","n":"team"},{"id":"/american_football/football_coach/current_team_head_coached","n":"football team"},{"id":"/astronomy/comet_group/comet","n":"comets"},{"id":"/people/ethnicity/geographic_distribution",
"n":"countries"},{"id":"/people/ethnicity/languages_spoken","n":"dialect"},{"id":"/people/ethnicity/languages_spoken","n":"language"},{"id":"/people/ethnicity/people","n":"people"},{"id":"/people/ethnicity/people","n":"members"},{"id":"/location/uk_principal_area/administrative_headquarters","n":"capital"},{"id":"/medicine/medical_treatment/used_to_treat","n":"diseases treated"},{"id":"/medicine/medical_treatment/used_to_treat","n":"treatments"},{"id":"/medicine/medical_treatment/used_to_treat","n":"function"},
{"id":"/medicine/medical_treatment/used_to_treat","n":"diseases"},{"id":"/medicine/medical_treatment/used_to_treat","n":"purpose"},{"id":"/digicams/camera_storage_type/compatible_cameras","n":"cameras"},{"id":"/olympics/olympic_games/athletes","n":"olympic athletes"},{"id":"/cvg/cvg_designer/games_designed","n":"games"},{"id":"/cvg/cvg_designer/games_designed","n":"videogames"},{"id":"/ice_hockey/hockey_coach/current_team","n":"team"},{"id":"/ice_hockey/hockey_coach/current_team","n":"hockey team"},
{"id":"/food/ingredient/dishes","n":"foods"},{"id":"/food/ingredient/dishes","n":"dishes"},{"id":"/architecture/museum/type_of_museum","n":"type"},{"id":"/architecture/museum/type_of_museum","n":"subject"},{"id":"/book/literary_series/author_s","n":"author"},{"id":"/book/literary_series/author_s","n":"creator"},{"id":"/book/literary_series/author_s","n":"writer"},{"id":"/book/literary_series/works_in_this_series","n":"books"},{"id":"/book/literary_series/works_in_this_series","n":"movies"},{"id":"/book/literary_series/works_in_this_series",
"n":"novels"},{"id":"/location/uk_council_area/administrative_headquarters","n":"capital"},{"id":"/government/government/government_for","n":"country"},{"id":"/music/genre/subgenre","n":"types"},{"id":"/music/genre/subgenre","n":"genres"},{"id":"/music/genre/artists","n":"bands"},{"id":"/music/genre/artists","n":"musicians"},{"id":"/music/genre/albums","n":"records"},{"id":"/music/genre/albums","n":"music"},{"id":"/architecture/architectural_style/architects","n":"designers"},{"id":"/architecture/architectural_style/examples",
"n":"buildings"},{"id":"/architecture/architectural_style/examples","n":"structures"},{"id":"/location/uk_non_metropolitan_county/administrative_headquarters","n":"capital"},{"id":"/computer/operating_system/developer","n":"creator"},{"id":"/people/profession/people_with_this_profession","n":"workers"},{"id":"/people/profession/people_with_this_profession","n":"pros"},{"id":"/people/profession/people_with_this_profession","n":"professionals"},{"id":"/people/profession/part_of_professional_field",
"n":"field"},{"id":"/people/profession/represented_by_trade_unions","n":"unions"},{"id":"/film/film_distribution_medium/films_distributed_in_this_medium","n":"movies"},{"id":"/film/film_distribution_medium/films_distributed_in_this_medium","n":"films"},{"id":"/fictional_universe/fictional_character/based_on","n":"origin"},{"id":"/fictional_universe/fictional_character/based_on","n":"source"},{"id":"/fictional_universe/fictional_character/based_on","n":"inspirations"},{"id":"/fictional_universe/fictional_character/based_on",
"n":"influence"},{"id":"/fictional_universe/fictional_character/based_on","n":"inspiration"},{"id":"/fictional_universe/fictional_character/place_of_birth","n":"birth place"},{"id":"/fictional_universe/fictional_character/place_of_birth","n":"birthplace"},{"id":"/fictional_universe/fictional_character/gender","n":"sex"},{"id":"/fictional_universe/fictional_character/parents","n":"mom"},{"id":"/fictional_universe/fictional_character/parents","n":"dad"},{"id":"/fictional_universe/fictional_character/parents",
"n":"father"},{"id":"/fictional_universe/fictional_character/parents","n":"mother"},{"id":"/fictional_universe/fictional_character/occupation","n":"job"},{"id":"/fictional_universe/fictional_character/occupation","n":"profession"},{"id":"/fictional_universe/fictional_character/organizations","n":"clubs"},{"id":"/fictional_universe/fictional_character/organizations","n":"organizations"},{"id":"/fictional_universe/fictional_character/powers_or_abilities","n":"super powers"},{"id":"/fictional_universe/fictional_character/powers_or_abilities",
"n":"superpowers"},{"id":"/fictional_universe/fictional_character/powers_or_abilities","n":"special powers"},{"id":"/fictional_universe/fictional_character/powers_or_abilities","n":"powers"},{"id":"/fictional_universe/fictional_character/powers_or_abilities","n":"supernatural powers"},{"id":"/fictional_universe/fictional_character/powers_or_abilities","n":"abilities"},{"id":"/fictional_universe/fictional_character/powers_or_abilities","n":"talents"},{"id":"/fictional_universe/fictional_character/powers_or_abilities",
"n":"magic powers"},{"id":"/fictional_universe/fictional_character/appears_in_these_fictional_universes","n":"stories"},{"id":"/fictional_universe/fictional_character/appears_in_these_fictional_universes","n":"books"},{"id":"/fictional_universe/fictional_character/appears_in_these_fictional_universes","n":"plays"},{"id":"/fictional_universe/fictional_character/appears_in_these_fictional_universes","n":"performances with"},{"id":"/fictional_universe/fictional_character/children","n":"kids"},{"id":"/fictional_universe/fictional_character/children",
"n":"child"},{"id":"/fictional_universe/fictional_character/children","n":"daughter"},{"id":"/fictional_universe/fictional_character/children","n":"son"},{"id":"/fictional_universe/fictional_character/siblings","n":"sister"},{"id":"/fictional_universe/fictional_character/siblings","n":"brother"},{"id":"/fictional_universe/fictional_character/married_to","n":"wife"},{"id":"/fictional_universe/fictional_character/married_to","n":"husband"},{"id":"/fictional_universe/fictional_character/married_to",
"n":"partner"},{"id":"/fictional_universe/fictional_character/married_to","n":"fiancee"},{"id":"/fictional_universe/fictional_character/married_to","n":"spouse"},{"id":"/fictional_universe/fictional_character/character_created_by","n":"creator"},{"id":"/fictional_universe/fictional_character/employers","n":"boss"},{"id":"/fictional_universe/fictional_character/quotations","n":"quotes"},{"id":"/fictional_universe/fictional_character/romantically_involved_with","n":"girlfriend"},{"id":"/fictional_universe/fictional_character/romantically_involved_with",
"n":"boyfriend"},{"id":"/fictional_universe/fictional_character/romantically_involved_with","n":"partner"},{"id":"/fictional_universe/fictional_character/romantically_involved_with","n":"fiancee"},{"id":"/fictional_universe/fictional_character/ethnicity","n":"race"},{"id":"/fictional_universe/fictional_character/ethnicity","n":"creed"},{"id":"/fictional_universe/fictional_character/education","n":"school"},{"id":"/fictional_universe/fictional_character/education","n":"schooling"},{"id":"/fictional_universe/fictional_character/education",
"n":"alma mater"},{"id":"/fictional_universe/fictional_character/has_possessed","n":"possessed"},{"id":"/fictional_universe/fictional_character/medical_conditions","n":"diseased"},{"id":"/fictional_universe/fictional_character/medical_conditions","n":"diseases"},{"id":"/fictional_universe/fictional_character/medical_conditions","n":"conditions"},{"id":"/fictional_universe/fictional_character/medical_conditions","n":"illness"},{"id":"/fictional_universe/fictional_character/medical_conditions","n":"illnesses"},
{"id":"/community/discussion_thread/post","n":"comment"},{"id":"/time/day_of_week/calendar_system","n":"calendar"},{"id":"/soccer/football_player/current_team","n":"current team"},{"id":"/soccer/football_player/current_team","n":"club"},{"id":"/soccer/football_player/current_team","n":"football team"},{"id":"/soccer/football_player/position_s","n":"position"},{"id":"/soccer/football_player/position_s","n":"football position"},{"id":"/soccer/football_player/matches_played","n":"games"},{"id":"/soccer/football_player/matches_played",
"n":"games played"},{"id":"/soccer/football_player/matches_played","n":"matches"},{"id":"/soccer/football_player/goals_scored","n":"goals"},{"id":"/soccer/football_player/goals_scored","n":"points"},{"id":"/soccer/football_player/disciplinary_action","n":"penalties"},{"id":"/location/cn_prefecture_level_city/city_seat","n":"seat"},{"id":"/location/tr_province/central_district","n":"capital"},{"id":"/film/cinematographer/film","n":"movies"},{"id":"/film/cinematographer/film","n":"films"},{"id":"/business/company_type/companies_of_this_type",
"n":"companies"},{"id":"/business/company_type/companies_of_this_type","n":"businesses"},{"id":"/business/company_type/companies_of_this_type","n":"business"},{"id":"/internet/top_level_domain_type/domains","n":"domains"},{"id":"/architecture/landscape_project/landscape_architect","n":"architect"},{"id":"/architecture/landscape_project/construction_cost","n":"cost"},{"id":"/architecture/landscape_project/construction_cost","n":"price"},{"id":"/architecture/building/building_function","n":"purpose"},
{"id":"/location/statistical_region/population","n":"people"},{"id":"/location/statistical_region/gdp_nominal","n":"gnp"},{"id":"/location/statistical_region/gdp_nominal_per_capita","n":"gnp per capita"},{"id":"/location/statistical_region/religions","n":"faiths"},{"id":"/location/statistical_region/religions","n":"religious beliefs"},{"id":"/location/statistical_region/automobiles_per_capita","n":"cars per capita"},{"id":"/location/statistical_region/major_imports","n":"imports"},{"id":"/location/statistical_region/major_exports",
"n":"exports"},{"id":"/location/statistical_region/places_exported_to","n":"trading partners"},{"id":"/location/statistical_region/places_imported_from","n":"trading partners"},{"id":"/government/political_district/representatives","n":"officials"},{"id":"/government/political_district/representatives","n":"public officials"},{"id":"/government/political_district/representatives","n":"leaders"},{"id":"/military/military_person/service","n":"assignments"},{"id":"/military/military_person/participated_in_conflicts",
"n":"wars"},{"id":"/military/military_person/participated_in_conflicts","n":"battles"},{"id":"/military/military_person/participated_in_conflicts","n":"conflicts"},{"id":"/education/fraternity_sorority_type/fraternities_and_sororities","n":"frats"},{"id":"/education/fraternity_sorority_type/fraternities_and_sororities","n":"fraternities"},{"id":"/education/fraternity_sorority_type/fraternities_and_sororities","n":"sororities"},{"id":"/education/school/school_district","n":"district"},{"id":"/education/school/school_district",
"n":"school board"},{"id":"/education/school/class_size","n":"class size"},{"id":"/theater/theater_actor/theater_roles","n":"performances"},{"id":"/theater/theater_actor/theater_roles","n":"roles"},{"id":"/theater/theater_actor/theater_roles","n":"plays"},{"id":"/music/release/label","n":"record label"},{"id":"/music/release/label","n":"publisher"},{"id":"/award/award_winning_work/awards_won","n":"awards"},{"id":"/award/award_winning_work/awards_won","n":"medals"},{"id":"/award/award_winning_work/awards_won",
"n":"honours"},{"id":"/film/editor/film","n":"films"},{"id":"/film/editor/film","n":"movies"},{"id":"/film/editor/film","n":"movies edited"},{"id":"/education/school_district/enrollment","n":"student number"},{"id":"/education/school_district/highest_grade_taught","n":"grades"},{"id":"/business/oil_field/estimated_reserves","n":"reserves"},{"id":"/business/oil_field/estimated_reserves","n":"oil"},{"id":"/cvg/computer_videogame/platforms","n":"system"},{"id":"/cvg/computer_videogame/platforms","n":"systems"},
{"id":"/cvg/computer_videogame/characters","n":"roles"},{"id":"/cvg/computer_videogame/sequel","n":"sequel"},{"id":"/cvg/computer_videogame/game_series","n":"series"},{"id":"/cvg/computer_videogame/prequel","n":"prequel"},{"id":"/cvg/computer_videogame/processors_supported","n":"processors"},{"id":"/cvg/computer_videogame/processors_supported","n":"cpu"},{"id":"/cvg/computer_videogame/online_reviews","n":"reviews"},{"id":"/cvg/computer_videogame/uses_game_engine","n":"engine"},{"id":"/cvg/computer_videogame/gameplay_modes",
"n":"modes"},{"id":"/cvg/computer_videogame/gameplay_modes","n":"gameplay"},{"id":"/cvg/computer_videogame/influenced_by","n":"influences"},{"id":"/cvg/computer_videogame/peripherals_supported","n":"contollers"},{"id":"/cvg/computer_videogame/peripherals_supported","n":"peripherals"},{"id":"/protected_sites/protected_site/annual_visitors","n":"visitors"},{"id":"/protected_sites/protected_site/governing_body","n":"government"},{"id":"/spaceflight/space_mission/astronauts","n":"astronauts"},{"id":"/spaceflight/space_mission/astronauts",
"n":"members"},{"id":"/spaceflight/space_mission/space_program","n":"program"},{"id":"/spaceflight/space_mission/landing_site","n":"landing site"},{"id":"/religion/belief/belief_of","n":"religions"},{"id":"/religion/belief/belief_of","n":"believers"},{"id":"/people/place_of_interment/interred_here","n":"people buried"},{"id":"/people/place_of_interment/interred_here","n":"burials"},{"id":"/people/place_of_interment/interred_here","n":"corpses"},{"id":"/people/place_of_interment/interred_here","n":"members"},
{"id":"/people/place_of_interment/interred_here","n":"bodies"},{"id":"/people/place_of_interment/interred_here","n":"people"},{"id":"/computer/computer_designer/computers_designed","n":"computers"},{"id":"/government/politician/government_positions_held","n":"positions held"},{"id":"/government/politician/government_positions_held","n":"positions"},{"id":"/government/politician/government_positions_held","n":"offices held"},{"id":"/government/politician/government_positions_held","n":"terms"},{"id":"/government/politician/party",
"n":"paty membership"},{"id":"/government/politician/party","n":"party membership"},{"id":"/government/politician/party","n":"political ideology"},{"id":"/government/politician/party","n":"political parties"},{"id":"/government/politician/party","n":"political party"},{"id":"/government/politician/party","n":"party affiliation"},{"id":"/government/politician/election_campaigns","n":"elections"},{"id":"/government/politician/election_campaigns","n":"campaigns"},{"id":"/government/politician/legislative_committees_served_on",
"n":"committees"},{"id":"/government/politician/legislative_committees_served_on","n":"comittees"},{"id":"/comic_strips/comic_strip_genre/comic_strips_of_this_genre","n":"comic strips"},{"id":"/comic_strips/comic_strip_genre/comic_strips_of_this_genre","n":"comics"},{"id":"/fictional_universe/person_in_fiction/representations_in_fiction","n":"characters"},{"id":"/fictional_universe/person_in_fiction/representations_in_fiction","n":"representations"},{"id":"/fictional_universe/character_occupation/characters_with_this_occupation",
"n":"characters"},{"id":"/theater/play/composer","n":"music composer"},{"id":"/theater/play/characters","n":"roles"},{"id":"/theater/play/country_of_origin","n":"country"},{"id":"/theater/play/country_of_origin","n":"origin"},{"id":"/theater/play/playwright","n":"writer"},{"id":"/theater/play/playwright","n":"creator"},{"id":"/book/author/series_written_or_contributed_to","n":"series"},{"id":"/book/author/works_written","n":"books"},{"id":"/book/author/works_written","n":"writing"},{"id":"/book/author/works_written",
"n":"novels"},{"id":"/book/author/works_written","n":"writings"},{"id":"/book/author/school_or_movement","n":"style"},{"id":"/book/author/school_or_movement","n":"writing style"},{"id":"/book/author/school_or_movement","n":"genre"},{"id":"/astronomy/meteorite/meteorite_fall_location","n":"location"},{"id":"/astronomy/meteorite/source_celestial_body","n":"source"},{"id":"/food/cheese/country_of_origin","n":"origin"},{"id":"/food/cheese/country_of_origin","n":"cheese"},{"id":"/food/cheese/source_of_milk",
"n":"animal"},{"id":"/meteorology/tropical_cyclone/affected_areas","n":"location"},{"id":"/meteorology/tropical_cyclone/affected_areas","n":"landfall"},{"id":"/military/military_unit/unit_size","n":"size"},{"id":"/food/tea_type/tea","n":"teas"},{"id":"/astronomy/extraterrestrial_location/on_celestial_object","n":"planet"},{"id":"/astronomy/extraterrestrial_location/on_celestial_object","n":"moon"},{"id":"/astronomy/extraterrestrial_location/on_celestial_object","n":"location"},{"id":"/astronomy/extraterrestrial_location/contained_by",
"n":"region"},{"id":"/rail/railway/part_of_network","n":"network"},{"id":"/rail/railway/terminuses","n":"terminals"},{"id":"/rail/railway/operator_s","n":"operator"},{"id":"/tv/tv_network/programs","n":"shows"},{"id":"/tv/tv_network/programs","n":"tv shows"},{"id":"/tv/tv_network/programs","n":"tv programs"},{"id":"/tv/tv_network/areas_served","n":"locations"},{"id":"/tv/tv_network/areas_served","n":"location"},{"id":"/tv/tv_network/areas_served","n":"area"},{"id":"/location/postal_code/country",
"n":"nation"},{"id":"/library/public_library_system/branches","n":"branches"},{"id":"/film/actor/film","n":"movies"},{"id":"/film/actor/film","n":"films"},{"id":"/film/actor/film","n":"performances"},{"id":"/film/actor/dubbing_performances","n":"vocal performances"},{"id":"/film/actor/dubbing_performances","n":"voice performances"},{"id":"/biology/organism_classification/higher_classification","n":"class"},{"id":"/biology/organism_classification/lower_classifications","n":"subclass"},{"id":"/biology/organism_classification/lower_classifications",
"n":"subgroups"},{"id":"/biology/organism_classification/organisms_of_this_type","n":"animals"},{"id":"/biology/organism_classification/organisms_of_this_type","n":"instances"},{"id":"/biology/organism_classification/organisms_of_this_type","n":"organisms"},{"id":"/biology/organism_classification/earliest_fossil_record","n":"history"},{"id":"/automotive/model/manufactured_at","n":"factory"},{"id":"/automotive/model/manufactured_at","n":"factories"},{"id":"/automotive/model/manufactured_at","n":"car plants"},
{"id":"/automotive/model/manufactured_at","n":"plant"},{"id":"/tv/tv_series_episode/series","n":"show"},{"id":"/tv/tv_series_episode/guest_personal_appearances","n":"cameo"},{"id":"/tv/tv_series_episode/segments","n":"parts"},{"id":"/tv/tv_series_episode/segments","n":"skits"},{"id":"/food/tea/regions_where_grown","n":"regions"},{"id":"/food/tea/regions_where_grown","n":"region"},{"id":"/food/tea/regions_where_grown","n":"origin"},{"id":"/food/tea/regions_where_grown","n":"location"},{"id":"/comic_books/comic_book_creator/characters_created",
"n":"comics"},{"id":"/comic_books/comic_book_creator/characters_created","n":"comicbooks"},{"id":"/location/citytown/city_limits","n":"border"},{"id":"/location/citytown/postal_codes","n":"zip code"},{"id":"/organization/club/areas_of_interest","n":"focus"},{"id":"/spaceflight/astronaut/missions","n":"missions"},{"id":"/spaceflight/astronaut/space_agency","n":"agency"},{"id":"/sports/sports_team_owner/teams_owned","n":"teams"},{"id":"/religion/religion/founding_figures","n":"prophet"},{"id":"/religion/religion/branched_into",
"n":"types"},{"id":"/religion/religion/branched_into","n":"dominations"},{"id":"/religion/religion/branched_into","n":"denominations"},{"id":"/religion/religion/includes","n":"types"},{"id":"/religion/religion/number_of_adherents","n":"number of followers"},{"id":"/religion/religion/texts","n":"scripture"},{"id":"/religion/religion/texts","n":"bible"},{"id":"/religion/religion/beliefs","n":"ideology"},{"id":"/religion/religion/practices","n":"traditions"},{"id":"/religion/religion/deities","n":"deities "},
{"id":"/religion/religion/deities","n":"god"},{"id":"/religion/religion/sacred_sites","n":"holy sites"},{"id":"/religion/religion/sacred_sites","n":"holy land"},{"id":"/religion/religion/collective_term_for_adherents","n":"followers"},{"id":"/religion/religion/collective_term_for_adherents","n":"believers"},{"id":"/religion/religion/places_of_worship","n":"churches"},{"id":"/religion/religion/places_of_worship","n":"mosques"},{"id":"/religion/religion/places_of_worship","n":"places of worship"},{"id":"/automotive/engine_type/used_in",
"n":"cars"},{"id":"/automotive/engine_type/used_in","n":"trucks"},{"id":"/automotive/engine_type/used_in","n":"automobiles"},{"id":"/automotive/engine/used_in","n":"cars"},{"id":"/automotive/engine/used_in","n":"trucks"},{"id":"/automotive/engine/fuels_used","n":"fuel"},{"id":"/spaceflight/space_program_sponsor/space_programs_sponsored","n":"space programs"},{"id":"/theater/theater_director/plays_directed","n":"plays"},{"id":"/theater/theater_director/plays_directed","n":"theatre"},{"id":"/baseball/baseball_position/players",
"n":"baseball players"},{"id":"/law/legal_case/subject","n":"legal problems"},{"id":"/law/legal_case/subject","n":"legal subject"},{"id":"/military/military_combatant/belongs_to_combatant_group","n":"allies"},{"id":"/military/military_combatant/military_commanders","n":"leaders"},{"id":"/military/military_combatant/military_conflicts","n":"wars"},{"id":"/military/military_combatant/military_conflicts","n":"battles"},{"id":"/event/disaster/damage","n":"damage"},{"id":"/event/disaster/damage","n":"cost"},
{"id":"/event/disaster/areas_affected","n":"location"},{"id":"/event/disaster/victims","n":"people killed"},{"id":"/event/disaster/structures_destroyed","n":"destroyed buildings"},{"id":"/event/disaster/structures_damaged","n":"damaged buildings"},{"id":"/wine/wine/wine_producer","n":"producer"},{"id":"/wine/wine/fruit_source","n":"fruit"},{"id":"/wine/wine/wine_style","n":"style"},{"id":"/fictional_universe/fictional_character_creator/fictional_characters_created","n":"characters"},{"id":"/book/cited_work/cited_in",
"n":"citations"},{"id":"/business/board_member/organization_board_memberships","n":"memberships"},{"id":"/business/board_member/organization_board_memberships","n":"affiliations"},{"id":"/business/board_member/organization_board_memberships","n":"boards"},{"id":"/business/board_member/organization_board_memberships","n":"organisations"},{"id":"/medicine/hospital/beds","n":"number of beds"},{"id":"/medicine/hospital/medical_specialties","n":"specialties"},{"id":"/medicine/hospital/medical_specialties",
"n":"specialty"},{"id":"/medicine/hospital/medical_specialties","n":"focus"},{"id":"/medicine/hospital/medical_specialties","n":"focuses"},{"id":"/medicine/hospital/medical_specialties","n":"research"},{"id":"/medicine/hospital/medical_school_affiliation","n":"med school"},{"id":"/medicine/hospital/medical_school_affiliation","n":"medical school"},{"id":"/tv/tv_character/first_tv_appearance","n":"debut"},{"id":"/tv/tv_character/last_tv_appearance","n":"finale"},{"id":"/tv/tv_character/appeared_in_tv_program",
"n":"shows"},{"id":"/tv/tv_character/appeared_in_tv_program","n":"programs"},{"id":"/tv/tv_character/appeared_in_tv_episodes","n":"shows"},{"id":"/tv/tv_character/appeared_in_tv_episodes","n":"episodes"},{"id":"/tv/tv_character/appeared_in_tv_episode_segments","n":"skits"},{"id":"/computer/processor_manufacturer/processors_manufactured","n":"processors"},{"id":"/computer/processor_manufacturer/processors_manufactured","n":"cpu"},{"id":"/theater/theater_production/performed_at","n":"venues"},{"id":"/automotive/model_year/examples",
"n":"cars"},{"id":"/automotive/model_year/next_model_year","n":"successor"},{"id":"/geography/river/origin","n":"source"},{"id":"/geography/river/origin","n":"fed"},{"id":"/geography/river/basin_countries","n":"basin"},{"id":"/geography/river/origin_long_lat","n":"origin"},{"id":"/geography/river/cities","n":"towns"},{"id":"/award/competitor/competitions_won","n":"wins"},{"id":"/award/competitor/competitions_won","n":"victories"},{"id":"/education/educational_degree/people_with_this_degree","n":"people"},
{"id":"/education/educational_degree/people_with_this_degree","n":"researchers"},{"id":"/education/educational_degree/people_with_this_degree","n":"students"},{"id":"/award/award_nominated_work/award_nominations","n":"nominations"},{"id":"/language/language_family/sub_families","n":"subgroups"},{"id":"/cvg/musical_game_song/games","n":"videogames"},{"id":"/opera/opera_character/portrayed_by","n":"actors"},{"id":"/opera/opera_character/portrayed_by","n":"actresses"},{"id":"/law/inventor/us_patents",
"n":"intellectual property"},{"id":"/business/company_advisor/companies_advised","n":"companies"},{"id":"/geography/geographical_feature/category","n":"feature type"},{"id":"/film/content_rating/film","n":"movie"},{"id":"/film/content_rating/country","n":"nation"},{"id":"/broadcast/radio_station/serves_area","n":"audiance"},{"id":"/geography/island/body_of_water","n":"lake"},{"id":"/geography/island/body_of_water","n":"ocean"},{"id":"/geography/island/body_of_water","n":"surounding river"},{"id":"/theater/theater_character/plays_appears_in",
"n":"plays"},{"id":"/theater/theater_character/portrayed_by","n":"actors"},{"id":"/theater/theater_character/portrayed_by","n":"actresses"},{"id":"/theater/theater_character/portrayed_by","n":"actress"},{"id":"/business/sponsored_recipient/sponsorship","n":"sponsors"},{"id":"/film/film_series/films_in_series","n":"films"},{"id":"/film/film_series/films_in_series","n":"movies"},{"id":"/education/educational_institution/faculty","n":"faculty"},{"id":"/education/educational_institution/faculty","n":"teachers"},
{"id":"/education/educational_institution/number_of_staff","n":"staff"},{"id":"/education/educational_institution/total_enrollment","n":"size"},{"id":"/education/educational_institution/total_enrollment","n":"enrollment"},{"id":"/education/educational_institution/mascot","n":"animal"},{"id":"/education/educational_institution/newspaper","n":"student paper"},{"id":"/education/educational_institution/newspaper","n":"student newspaper"},{"id":"/education/educational_institution/students_graduates","n":"students"},
{"id":"/education/educational_institution/students_graduates","n":"graduates"},{"id":"/education/educational_institution/students_graduates","n":"alumni"},{"id":"/education/educational_institution/subsidiary_or_constituent_schools","n":"satellite schools"},{"id":"/education/educational_institution/subsidiary_or_constituent_schools","n":"campuses"},{"id":"/education/educational_institution/school_magazines","n":"student magazine"},{"id":"/education/educational_institution/radio_station","n":"student radio"},
{"id":"/education/educational_institution/radio_station","n":"radio"},{"id":"/education/educational_institution/sexes_accepted","n":"gender"},{"id":"/food/beer/brewery_brand","n":"brewery"},{"id":"/food/beer/brewery_brand","n":"breweries"},{"id":"/food/beer/brewery_brand","n":"brand"},{"id":"/food/beer/brewery_brand","n":"maker"},{"id":"/food/beer/from_region","n":"location"},{"id":"/food/beer/from_region","n":"origin"},{"id":"/visual_art/artwork/artist","n":"creator"},{"id":"/visual_art/artwork/period_or_movement",
"n":"school"},{"id":"/visual_art/artwork/art_subject","n":"focus"},{"id":"/visual_art/artwork/owners","n":"buyers"},{"id":"/organization/organization/founders","n":"creators"},{"id":"/organization/organization/board_members","n":"board"},{"id":"/organization/organization/headquarters","n":"place"},{"id":"/organization/organization/headquarters","n":"location"},{"id":"/organization/organization/headquarters","n":"site"},{"id":"/organization/organization/sectors","n":"groups"},{"id":"/organization/organization/sectors",
"n":"focus"},{"id":"/organization/organization/sectors","n":"subject"},{"id":"/organization/organization/sectors","n":"research"},{"id":"/organization/organization/sectors","n":"advocacy"},{"id":"/organization/organization/committees","n":"groups"},{"id":"/organization/organization/legal_structure","n":"company type"},{"id":"/organization/organization/legal_structure","n":"type of company"},{"id":"/organization/organization/place_founded","n":"founding location"},{"id":"/organization/organization/place_founded",
"n":"founding place"},{"id":"/organization/organization/locations","n":"locations"},{"id":"/organization/organization/locations","n":"stores"},{"id":"/organization/organization/acquired_by","n":"bought by"},{"id":"/organization/organization/companies_acquired","n":"companies bought"},{"id":"/organization/organization/leadership","n":"leader"},{"id":"/metropolitan_transit/transit_line/stops","n":"stops"},{"id":"/metropolitan_transit/transit_line/stops","n":"terminals"},{"id":"/metropolitan_transit/transit_line/terminuses",
"n":"terminals"},{"id":"/metropolitan_transit/transit_line/service_hours","n":"hours"},{"id":"/metropolitan_transit/transit_line/daily_riders","n":"riders"},{"id":"/soccer/football_position/players","n":"football players"},{"id":"/sports/sports_team/arena_stadium","n":"arena"},{"id":"/sports/sports_team/arena_stadium","n":"stadium"},{"id":"/sports/sports_team/arena_stadium","n":"field"},{"id":"/sports/sports_team/arena_stadium","n":"rink"},{"id":"/sports/sports_team/arena_stadium","n":"coliseum"},
{"id":"/sports/sports_team/arena_stadium","n":"colosseum"},{"id":"/sports/sports_team/location","n":"city"},{"id":"/sports/sports_team/location","n":"place"},{"id":"/sports/sports_team/location","n":"location"},{"id":"/sports/sports_team/team_mascot","n":"mascot"},{"id":"/sports/sports_team/team_mascot","n":"animal"},{"id":"/sports/sports_team/previously_known_as","n":"history"},{"id":"/sports/sports_team/season_record","n":"stats"},{"id":"/fictional_universe/fictional_universe_creator/fictional_universes_created",
"n":"stories"},{"id":"/food/food/nutrients","n":"nutrients"},{"id":"/food/food/nutrients","n":"vitamins"},{"id":"/food/food/nutrients","n":"nutrition information"},{"id":"/food/food/nutrients","n":"ingredients"},{"id":"/book/reviewed_work/reviews_of_this_work","n":"reviews"},{"id":"/wine/wine_producer/wines","n":"wines made"},{"id":"/wine/wine_producer/wines","n":"wines produced"},{"id":"/aviation/accident_type/aircraft_accidents_of_this_type","n":"accidents"},{"id":"/aviation/accident_type/aircraft_accidents_of_this_type",
"n":"disasters"},{"id":"/aviation/accident_type/aircraft_accidents_of_this_type","n":"crashes"},{"id":"/library/public_library/library_system","n":"network"},{"id":"/american_football/football_position/players","n":"football players"},{"id":"/location/location/geolocation","n":"coordinates"},{"id":"/location/location/geolocation","n":"geocoordinates"},{"id":"/location/location/geolocation","n":"geo-coordinates"},{"id":"/location/location/contains","n":"includes"},{"id":"/location/location/contains",
"n":"parts"},{"id":"/location/location/contains","n":"sections"},{"id":"/location/location/contains","n":"places"},{"id":"/location/location/contains","n":"places in"},{"id":"/location/location/contains","n":"places inside"},{"id":"/location/location/contains","n":"contents"},{"id":"/location/location/contains","n":"parts of"},{"id":"/location/location/contains","n":"neighbourhoods"},{"id":"/location/location/contains","n":"subdivisions"},{"id":"/location/location/contains","n":"locations"},{"id":"/location/location/contains",
"n":"locations in"},{"id":"/location/location/contains","n":"locations inside"},{"id":"/location/location/containedby","n":"included in"},{"id":"/location/location/containedby","n":"part of"},{"id":"/location/location/containedby","n":"location"},{"id":"/location/location/adjoin_s","n":"beside"},{"id":"/location/location/adjoin_s","n":"neighbour"},{"id":"/location/location/adjoin_s","n":"neighbours"},{"id":"/location/location/time_zones","n":"utc"},{"id":"/location/location/time_zones","n":"timezone"},
{"id":"/location/location/people_born_here","n":"natives"},{"id":"/location/location/people_born_here","n":"residents"},{"id":"/location/location/people_born_here","n":"citizen"},{"id":"/location/location/people_born_here","n":"citizens"},{"id":"/location/location/people_born_here","n":"people"},{"id":"/location/location/people_born_here","n":"hometown"},{"id":"/location/location/street_address","n":"location"},{"id":"/location/location/street_address","n":"address"},{"id":"/medicine/medical_specialty/diseases_treated",
"n":"diseases"},{"id":"/medicine/medical_specialty/diseases_treated","n":"conditions"},{"id":"/medicine/medical_specialty/physicians_with_this_specialty","n":"doctos"},{"id":"/medicine/medical_specialty/physicians_with_this_specialty","n":"doctors"},{"id":"/medicine/medical_specialty/physicians_with_this_specialty","n":"physicians"},{"id":"/medicine/medical_specialty/hospitals_with_this_specialty","n":"hospitals"},{"id":"/comic_books/comic_book_series/featured_characters","n":"characters"},{"id":"/comic_books/comic_book_series/featured_characters",
"n":"characters "},{"id":"/comic_books/comic_book_series/final_issue","n":"end"},{"id":"/comic_books/comic_book_series/first_issue","n":"beginning"},{"id":"/comic_books/comic_book_series/created_by","n":"creator"},{"id":"/food/candy_bar_manufacturer/candy_bars","n":"bars"},{"id":"/food/candy_bar_manufacturer/candy_bars","n":"chocolate bars"},{"id":"/food/candy_bar_manufacturer/candy_bars","n":"candy"},{"id":"/cricket/cricket_bowler/odi_bowling_stats","n":"stats"},{"id":"/cricket/cricket_bowler/test_bowling_stats",
"n":"stats"},{"id":"/cricket/cricket_bowler/bowling_style","n":"style"},{"id":"/government/political_party/politicians_in_this_party","n":"card-carriers"},{"id":"/government/political_party/politicians_in_this_party","n":"members"},{"id":"/government/political_party/politicians_in_this_party","n":"politicians"},{"id":"/government/political_party/politicians_in_this_party","n":"mps"},{"id":"/government/political_party/politicians_in_this_party","n":"mpps"},{"id":"/martial_arts/martial_art/origin",
"n":"origin"},{"id":"/martial_arts/martial_art/origin","n":"country"},{"id":"/martial_arts/martial_art/well_known_practitioner","n":"experts"},{"id":"/martial_arts/martial_art/well_known_practitioner","n":"professionals"},{"id":"/sports/sports_championship_event/season","n":"year"},{"id":"/sports/sports_championship_event/runner_up","n":"loser"},{"id":"/sports/sports_championship_event/champion","n":"winner"},{"id":"/sports/sports_championship_event/champion","n":"winning team"},{"id":"/games/playing_card_deck_type/card_games",
"n":"games"},{"id":"/theater/theater_production_staff/theater_productions","n":"plays"},{"id":"/people/marriage_union_type/unions_of_this_type","n":"couples"},{"id":"/computer/programming_language_paradigm/languages","n":"computer  languages"},{"id":"/tv/tv_program/program_creator","n":"creator "},{"id":"/tv/tv_program/program_creator","n":"author"},{"id":"/tv/tv_program/regular_cast","n":"characters"},{"id":"/tv/tv_program/regular_cast","n":"roles"},{"id":"/tv/tv_program/regular_cast","n":"actors"},
{"id":"/tv/tv_program/theme_song","n":"song"},{"id":"/tv/tv_program/theme_song","n":"jingle"},{"id":"/tv/tv_program/recurring_writers","n":"writers"},{"id":"/fictional_universe/character_powers/characters_with_this_ability","n":"characters"},{"id":"/location/us_county/county_seat","n":"seat"},{"id":"/dining/restaurant/cuisine","n":"type"},{"id":"/dining/restaurant/cuisine","n":"food"},{"id":"/dining/restaurant/cuisine","n":"style"},{"id":"/dining/restaurant/chefs","n":"cook"},{"id":"/location/ru_krai/administrative_center",
"n":"capital"},{"id":"/organization/organization_scope/organizations_with_this_scope","n":"organizations"},{"id":"/organization/organization_scope/organizations_with_this_scope","n":"organisations"},{"id":"/organization/organization_scope/organizations_with_this_scope","n":"groups"},{"id":"/organization/organization_scope/organizations_with_this_scope","n":"foundations"},{"id":"/organization/organization_scope/organizations_with_this_scope","n":"societies"},{"id":"/theater/theater/theatrical_productions_staged_here",
"n":"plays"},{"id":"/theater/theater/theatrical_productions_staged_here","n":"productions"},{"id":"/location/ru_oblast/administrative_center","n":"capital"},{"id":"/location/australian_state/capital_city","n":"capital"},{"id":"/medicine/drug_administration_route/administered_drugs","n":"drugs"},{"id":"/medicine/drug_administration_route/administered_drugs","n":"medications"},{"id":"/comic_books/comic_book_publisher/comic_book_series_published","n":"comics"},{"id":"/location/uk_metropolitan_borough/administrative_headquarters",
"n":"capital"},{"id":"/automotive/designer/automobiles_designed","n":"cars"},{"id":"/automotive/designer/automobiles_designed","n":"cars designed"},{"id":"/automotive/designer/automobiles_designed","n":"automobiles"},{"id":"/fictional_universe/fictional_job_title/fictional_characters_with_this_job","n":"characters"},{"id":"/influence/influence_node/influenced_by","n":"influences"},{"id":"/influence/influence_node/influenced_by","n":"inspirations"},{"id":"/influence/influence_node/influenced","n":"inspired"},
{"id":"/influence/influence_node/peers","n":"contemporaries"},{"id":"/influence/influence_node/peers","n":"collegue"},{"id":"/influence/influence_node/peers","n":"collegues"},{"id":"/influence/influence_node/peers","n":"friends"},{"id":"/visual_art/art_period_movement/associated_artists","n":"artists"},{"id":"/visual_art/art_period_movement/associated_artworks","n":"art"},{"id":"/visual_art/art_period_movement/associated_artworks","n":"artworks"},{"id":"/visual_art/art_period_movement/associated_artworks",
"n":"pieces"},{"id":"/visual_art/art_period_movement/associated_artworks","n":"paintings"},{"id":"/time/holiday/featured_in_religions","n":"religion"},{"id":"/visual_art/visual_art_genre/artworks","n":"art"},{"id":"/visual_art/visual_art_genre/artworks","n":"paintings"},{"id":"/government/primary_election/follow_on_election","n":"elections"},{"id":"/automotive/company/make_s","n":"makes"},{"id":"/automotive/company/make_s","n":"models"},{"id":"/automotive/company/make_s","n":"cars"},{"id":"/automotive/company/make_s",
"n":"trucks"},{"id":"/automotive/company/manufacturing_plants","n":"plants"},{"id":"/automotive/company/manufacturing_plants","n":"factories"},{"id":"/automotive/company/manufacturing_plants","n":"car plants"},{"id":"/architecture/structure/architect","n":"designer"},{"id":"/architecture/structure/construction_cost","n":"cost"},{"id":"/architecture/structure/construction_cost","n":"price"},{"id":"/architecture/structure/engineer","n":"chief engineer"},{"id":"/architecture/structure/address","n":"location"},
{"id":"/architecture/structure/architectural_style","n":"style"},{"id":"/architecture/structure/architectural_style","n":"appearance"},{"id":"/biology/organism/sex","n":"gender"},{"id":"/biology/organism/children","n":"kids"},{"id":"/biology/organism/children","n":"progeny"},{"id":"/biology/organism/place_of_birth","n":"birth place"},{"id":"/architecture/engineer/projects","n":"work"},{"id":"/architecture/engineer/partner_in_firm","n":"firm"},{"id":"/film/film_character/portrayed_in_films","n":"films"},
{"id":"/film/film_character/portrayed_in_films","n":"movies"},{"id":"/theater/theater_genre/plays_in_this_genre","n":"plays"},{"id":"/film/film_company_role_or_service/companies_performing_this_role_or_service","n":"companies"},{"id":"/fictional_universe/fictional_setting/contained_by","n":"location"},{"id":"/fictional_universe/fictional_setting/contained_by","n":"locations"},{"id":"/fictional_universe/fictional_setting/works_set_here","n":"books"},{"id":"/fictional_universe/fictional_setting/works_set_here",
"n":"novels"},{"id":"/fictional_universe/fictional_setting/works_set_here","n":"movies"},{"id":"/fictional_universe/fictional_setting/fictional_characters_born_here","n":"characters"},{"id":"/organization/membership_organization/number_of_members","n":"membership"},{"id":"/organization/membership_organization/members","n":"people"},{"id":"/spaceflight/rocket_function/rockets_supporting_this_function","n":"rockets"},{"id":"/location/country/administrative_divisions","n":"provinces"},{"id":"/location/country/administrative_divisions",
"n":"territories"},{"id":"/location/country/administrative_divisions","n":"states"},{"id":"/location/country/currency_used","n":"money"},{"id":"/location/country/currency_used","n":"currency"},{"id":"/location/country/official_language","n":"language"},{"id":"/location/country/gdp_nominal_per_capita","n":"gdp per capita"},{"id":"/location/country/internet_tld","n":"tld"},{"id":"/location/country/languages_spoken","n":"spoken languages"},{"id":"/location/ru_raion/administrative_center","n":"capital"},
{"id":"/broadcast/radio_station_owner/radio_stations","n":"radio stations"},{"id":"/organization/organization_member/member_of","n":"organizations"},{"id":"/organization/organization_member/member_of","n":"organisations"},{"id":"/organization/organization_member/committees_served_on","n":"committees"},{"id":"/organization/organization_sector/organizations_in_this_sector","n":"organisations"},{"id":"/organization/organization_sector/organizations_in_this_sector","n":"organizations"},{"id":"/organization/organization_sector/organizations_in_this_sector",
"n":"groups"},{"id":"/organization/organization_sector/organizations_in_this_sector","n":"clubs"},{"id":"/organization/organization_sector/organizations_in_this_sector","n":"societies"},{"id":"/organization/organization_sector/organizations_in_this_sector","n":"support groups"},{"id":"/organization/organization_sector/organizations_in_this_sector","n":"comitees"},{"id":"/organization/organization_sector/organizations_in_this_sector","n":"charities"},{"id":"/organization/organization_sector/organizations_in_this_sector",
"n":"charity"},{"id":"/organization/organization_sector/organizations_in_this_sector","n":"foundations"},{"id":"/medicine/drug/drug_class","n":"class"},{"id":"/medicine/drug/route_of_administration","n":"administration"},{"id":"/medicine/drug/legal_status","n":"status"},{"id":"/transportation/bridge/body_of_water_spanned","n":"river"},{"id":"/transportation/bridge/body_of_water_spanned","n":"water under"},{"id":"/transportation/bridge/body_of_water_spanned","n":"water unde"},{"id":"/transportation/bridge/body_of_water_spanned",
"n":"water"},{"id":"/transportation/bridge/body_of_water_spanned","n":"lake"},{"id":"/transportation/bridge/locale","n":"city"},{"id":"/fictional_universe/character_species/found_in_fictional_universe","n":"story"},{"id":"/aviation/airliner_accident/accident_site","n":"location"},{"id":"/aviation/airliner_accident/flight_destination","n":"destination"},{"id":"/aviation/airliner_accident/aircraft","n":"airplane"},{"id":"/computer/software/protocols_used","n":"protocols"},{"id":"/computer/software/languages_used",
"n":"programming language"},{"id":"/award/ranked_item/appears_in_ranked_lists","n":"rank"},{"id":"/religion/religious_leadership_jurisdiction/size_or_type","n":"size"},{"id":"/book/published_work/published_in_published_as","n":"publisher"},{"id":"/organization/organization_founder/organizations_founded","n":"organization"},{"id":"/film/film/directed_by","n":"director"},{"id":"/film/film/directed_by","n":"auteur"},{"id":"/film/film/produced_by","n":"prodocer"},{"id":"/film/film/produced_by","n":"producer"},
{"id":"/film/film/written_by","n":"writer"},{"id":"/film/film/written_by","n":"screenwriter"},{"id":"/film/film/cinematography","n":"cinematographer"},{"id":"/film/film/edited_by","n":"editor"},{"id":"/film/film/edited_by","n":"editer"},{"id":"/film/film/music","n":"composer"},{"id":"/film/film/music","n":"score"},{"id":"/film/film/music","n":"music"},{"id":"/film/film/music","n":"musicians"},{"id":"/film/film/rating","n":"rating"},{"id":"/film/film/rating","n":"content rating"},{"id":"/film/film/estimated_budget",
"n":"price"},{"id":"/film/film/estimated_budget","n":"cost"},{"id":"/film/film/estimated_budget","n":"budget"},{"id":"/film/film/country","n":"country"},{"id":"/film/film/starring","n":"stars"},{"id":"/film/film/starring","n":"lead"},{"id":"/film/film/starring","n":"actors"},{"id":"/film/film/starring","n":"actresses"},{"id":"/film/film/starring","n":"actress"},{"id":"/film/film/starring","n":"acting"},{"id":"/film/film/starring","n":"people in"},{"id":"/film/film/runtime","n":"length"},{"id":"/film/film/locations",
"n":"places in"},{"id":"/film/film/locations","n":"places"},{"id":"/film/film/locations","n":"location"},{"id":"/film/film/soundtrack","n":"music"},{"id":"/film/film/soundtrack","n":"score"},{"id":"/film/film/featured_film_locations","n":"filming locations"},{"id":"/film/film/featured_film_locations","n":"place filmed"},{"id":"/film/film/featured_film_locations","n":"set"},{"id":"/film/film/featured_film_locations","n":"filmset"},{"id":"/film/film/featured_film_locations","n":"filming location"},
{"id":"/film/film/film_series","n":"trilogy"},{"id":"/film/film/story_by","n":"author"},{"id":"/film/film/personal_appearances","n":"cameos"},{"id":"/film/film/dubbing_performances","n":"voice actors"},{"id":"/film/film/dubbing_performances","n":"voices"},{"id":"/film/film/dubbing_performances","n":"voice actress"},{"id":"/film/film/costume_design_by","n":"costumes"},{"id":"/film/film/other_crew","n":"crew"},{"id":"/film/film/other_crew","n":"film crew"},{"id":"/film/film/trailers","n":"teaser"},
{"id":"/film/film/distributors","n":"publisher"},{"id":"/film/film/release_date_s","n":"date"},{"id":"/film/film/film_festivals","n":"festivals"},{"id":"/film/film/executive_produced_by","n":"executive producer"},{"id":"/film/film/film_casting_director","n":"casting director"},{"id":"/film/film/film_production_design_by","n":"production designer"},{"id":"/film/film/film_set_decoration_by","n":"set decorator"},{"id":"/film/film_genre/films_in_this_genre","n":"movies"},{"id":"/film/film_genre/films_in_this_genre",
"n":"films"},{"id":"/architecture/architect/structures_designed","n":"buildings"},{"id":"/architecture/architect/structures_designed","n":"work"},{"id":"/architecture/architect/structures_designed","n":"structures"},{"id":"/architecture/architect/structures_designed","n":"projects"},{"id":"/architecture/architect/architectural_style","n":"style"},{"id":"/architecture/architect/architectural_style","n":"school"},{"id":"/projects/project_participant/projects","n":"construction projects"},{"id":"/transportation/road/orientation",
"n":"direction"},{"id":"/transportation/road/major_cities","n":"cities"},{"id":"/transportation/road/major_cities","n":"city"},{"id":"/transportation/road/major_cities","n":"towns"},{"id":"/transportation/road/highway_system","n":"highway"},{"id":"/transportation/road/major_junctions1","n":"intersections"},{"id":"/transportation/road/major_junctions1","n":"crossings"},{"id":"/transportation/road/major_junctions1","n":"junctions"},{"id":"/transportation/road/end1","n":"end"},{"id":"/transportation/road/end1",
"n":"start"},{"id":"/transportation/road/end2","n":"end"},{"id":"/transportation/road/end2","n":"start"},{"id":"/sports/drafted_athlete/drafted","n":"draft"},{"id":"/sports/drafted_athlete/drafted","n":"draft date"},{"id":"/award/award_category/judges_jury","n":"judges"},{"id":"/people/deceased_person/cause_of_death","n":"reason for dying"},{"id":"/people/deceased_person/cause_of_death","n":"terminal ilness"},{"id":"/people/deceased_person/cause_of_death","n":"terminal illness"},{"id":"/people/deceased_person/place_of_death",
"n":"death place"},{"id":"/people/deceased_person/place_of_burial","n":"resting place"},{"id":"/people/deceased_person/place_of_burial","n":"cemetary"},{"id":"/people/deceased_person/place_of_cremation","n":"crematorium"},{"id":"/language/human_language/countries_spoken_in","n":"places spoken"},{"id":"/sports/sport/related_equipment","n":"equipment"},{"id":"/sports/sport/related_equipment","n":"gear"},{"id":"/sports/sport/related_equipment","n":"tools"},{"id":"/sports/sport/officials","n":"referees"},
{"id":"/sports/sport/pro_athletes","n":"athletes"},{"id":"/sports/sport/pro_athletes","n":"players"},{"id":"/sports/sport/pro_athletes","n":"competitors"},{"id":"/sports/sport/pro_athletes","n":"pros"},{"id":"/sports/sport/pro_athletes","n":"professionals"},{"id":"/tennis/tennis_player/matches_won","n":"wins"},{"id":"/tennis/tennis_player/career_prize_money","n":"winnings"},{"id":"/tennis/tennis_player/tennis_grip","n":"grip"},{"id":"/tennis/tennis_player/handed","n":"handedness"},{"id":"/theater/theater_choreographer/plays_choreographed",
"n":"plays"},{"id":"/opera/opera/composer","n":"creator"},{"id":"/opera/opera/composer","n":"author"},{"id":"/opera/opera/composer","n":"maker"},{"id":"/opera/opera/characters","n":"roles"},{"id":"/opera/opera/premiere_production","n":"premiere"},{"id":"/opera/opera/premiere_production","n":"debut"},{"id":"/music/conductor/operas_conducted","n":"operas"},{"id":"/music/conductor/operas_conducted","n":"operas conducted"},{"id":"/music/conductor/groups","n":"ensembles"},{"id":"/music/conductor/groups",
"n":"groups"},{"id":"/music/conductor/groups","n":"groups conducted"},{"id":"/games/playing_card_game/play_direction","n":"direction"},{"id":"/government/election_campaign/total_amount_raised","n":"fundraising"},{"id":"/government/election_campaign/party","n":"party"},{"id":"/religion/founding_figure/religion_founded","n":"religion"},{"id":"/religion/founding_figure/religion_founded","n":"religion made"},{"id":"/tv/tv_program_creator/programs_created","n":"programs"},{"id":"/tv/tv_program_creator/programs_created",
"n":"tv programs"},{"id":"/tv/tv_program_creator/programs_created","n":"tv"},{"id":"/tv/tv_program_creator/programs_created","n":"tv shows"},{"id":"/medicine/medical_trial_sponsor/trials_sponsored","n":"trials"},{"id":"/comic_books/comic_book_colorist/comic_covers_colored","n":"covers"},{"id":"/education/field_of_study/journals_in_this_discipline","n":"journals"},{"id":"/education/field_of_study/journals_in_this_discipline","n":"publications"},{"id":"/education/field_of_study/subdisciplines","n":"types"},
{"id":"/education/field_of_study/subdisciplines","n":"disciplines "},{"id":"/education/field_of_study/subdisciplines","n":"fields"},{"id":"/education/field_of_study/subdisciplines","n":"subjects"},{"id":"/education/field_of_study/subdisciplines","n":"sectors"},{"id":"/education/field_of_study/students_majoring","n":"students"},{"id":"/education/field_of_study/academics_in_this_field","n":"experts"},{"id":"/education/field_of_study/academics_in_this_field","n":"academics"},{"id":"/education/field_of_study/academics_in_this_field",
"n":"professionals"},{"id":"/education/field_of_study/academics_in_this_field","n":"researchers"},{"id":"/olympics/olympic_host_city/olympics_hosted","n":"olympics"},{"id":"/award/competition/winner","n":"champion"},{"id":"/award/competition/competitors","n":"teams"},{"id":"/award/competition/competitors","n":"players"},{"id":"/comic_books/comic_book_inker/comic_covers_inked","n":"covers"},{"id":"/book/book_edition/cover_price","n":"price"},{"id":"/book/book_edition/number_of_pages","n":"pages"},
{"id":"/book/book_edition/number_of_pages","n":"length"},{"id":"/book/book_edition/reader","n":"performer"},{"id":"/book/book_edition/contributing_authors","n":"contributors"},{"id":"/book/book_edition/book_edition_series","n":"series"},{"id":"/basketball/basketball_team/roster","n":"players"},{"id":"/basketball/basketball_team/roster","n":"roster"},{"id":"/basketball/basketball_team/roster","n":"basketball players"},{"id":"/basketball/basketball_team/team_stats","n":"stats"},{"id":"/basketball/basketball_team/team_stats",
"n":"statistics"},{"id":"/basketball/basketball_team/head_coach","n":"coach"},{"id":"/basketball/basketball_team/historical_roster","n":"former players"},{"id":"/book/translator/works_translated","n":"translations"},{"id":"/book/translator/works_translated","n":"translated books"},{"id":"/cvg/computer_game_engine_developer/computer_game_engines_developed","n":"engines"},{"id":"/government/governmental_jurisdiction/governing_officials","n":"president"},{"id":"/government/governmental_jurisdiction/governing_officials",
"n":"prime minister"},{"id":"/government/governmental_jurisdiction/governing_officials","n":"premier"},{"id":"/government/governmental_jurisdiction/governing_officials","n":"executive"},{"id":"/government/governmental_jurisdiction/governing_officials","n":"mayor"},{"id":"/fictional_universe/fictional_employer/employees","n":"workers"},{"id":"/government/form_of_government/countries","n":"nations"},{"id":"/government/form_of_government/countries","n":"states"},{"id":"/medicine/risk_factor/diseases",
"n":"dangers"},{"id":"/medicine/risk_factor/diseases","n":"diseases caused"},{"id":"/music/artist/origin","n":"hometown"},{"id":"/music/artist/origin","n":"origin"},{"id":"/music/artist/origin","n":"city"},{"id":"/music/artist/genre","n":"genre"},{"id":"/music/artist/genre","n":"style"},{"id":"/music/artist/label","n":"label"},{"id":"/music/artist/album","n":"record"},{"id":"/music/artist/album","n":"records"},{"id":"/music/artist/album","n":"lps"},{"id":"/music/artist/album","n":"releases"},{"id":"/music/artist/album",
"n":"discography"},{"id":"/music/artist/album","n":"recordings"},{"id":"/music/artist/contribution","n":"records"},{"id":"/music/artist/track","n":"songs"},{"id":"/music/artist/concert_tours","n":"tours"},{"id":"/music/artist/concert_tours","n":"international tours"},{"id":"/comic_strips/comic_strip_creator/comic_strips_written","n":"comic strips"},{"id":"/comic_strips/comic_strip_creator/comic_strips_written","n":"comics"},{"id":"/government/election/office","n":"job"},{"id":"/government/election/winner",
"n":"winner"},{"id":"/law/us_patent/inventor","n":"owner"},{"id":"/law/us_patent/inventor","n":"author"},{"id":"/internet/website/api","n":"apis"},{"id":"/religion/deity/deity_of","n":"religions"},{"id":"/religion/deity/deity_of","n":"believers"},{"id":"/religion/deity/deity_of","n":"worshipers"},{"id":"/religion/deity/deity_of","n":"followers"},{"id":"/book/school_or_movement/associated_authors","n":"authors"},{"id":"/book/school_or_movement/associated_authors","n":"writers"},{"id":"/book/school_or_movement/associated_works",
"n":"works"},{"id":"/book/school_or_movement/associated_works","n":"books"},{"id":"/book/school_or_movement/associated_works","n":"novels"},{"id":"/book/journal/individual_price","n":"price"},{"id":"/book/journal/individual_price","n":"cost"},{"id":"/book/journal/place_of_publication","n":"location"},{"id":"/book/journal/discipline","n":"subject"},{"id":"/book/journal/discipline","n":"focus"},{"id":"/book/newspaper/headquarters","n":"office"},{"id":"/book/newspaper/circulation_areas","n":"circulation"},
{"id":"/book/newspaper/circulation_areas","n":"location"},{"id":"/location/australian_territory/capital_city","n":"capital"},{"id":"/sports/sports_league/seasons","n":"years"},{"id":"/tv/tv_director/episodes_directed","n":"tv shows"},{"id":"/tv/tv_director/tv_segments_directed","n":"skits"},{"id":"/government/national_anthem/national_anthem_of","n":"country"},{"id":"/interests/collectable_item/in_collections","n":"collections"},{"id":"/education/school_type/schools_of_this_kind","n":"schools"},{"id":"/internet/top_level_domain_sponsor/domains",
"n":"domains"},{"id":"/olympics/olympic_participating_country/demonstration_medals_won","n":"olympic medals"},{"id":"/olympics/olympic_participating_country/demonstration_medals_won","n":"medals"},{"id":"/olympics/olympic_participating_country/olympics_participated_in","n":"olympics"},{"id":"/olympics/olympic_participating_country/olympics_participated_in","n":"olympic games"},{"id":"/book/book/editions","n":"versions"},{"id":"/book/book/characters","n":"roles"},{"id":"/book/book/interior_illustrations_by",
"n":"illustrator"},{"id":"/internet/blog/blogger","n":"writer"},{"id":"/internet/blog/blogger","n":"creator"},{"id":"/internet/blog/focus","n":"tags"},{"id":"/time/month/calendar_system","n":"calendar"},{"id":"/tv/tv_series_season/episodes","n":"episode count"},{"id":"/tv/tv_series_season/regular_cast","n":"cast"},{"id":"/tv/tv_series_season/regular_cast","n":"actors"},{"id":"/tv/tv_series_season/regular_cast","n":"actresses"},{"id":"/tv/tv_series_season/regular_cast","n":"acting"},{"id":"/tv/tv_series_season/regular_cast",
"n":"performers"},{"id":"/tv/tv_series_season/regular_personal_appearances","n":"cameos"},{"id":"/medicine/drug_brand/active_ingredients","n":"ingredient"},{"id":"/tv/tv_actor/starring_roles","n":"roles"},{"id":"/tv/tv_actor/starring_roles","n":"shows"},{"id":"/tv/tv_actor/starring_roles","n":"programs"},{"id":"/tv/tv_actor/starring_roles","n":"tv programs"},{"id":"/tv/tv_actor/starring_roles","n":"tv shows"},{"id":"/tv/tv_actor/guest_roles","n":"episodes"},{"id":"/tv/tv_actor/tv_segment_performances",
"n":"skits"},{"id":"/location/ca_indian_reserve/aboriginal_groups","n":"tribe"},{"id":"/location/ca_indian_reserve/aboriginal_groups","n":"aboriginal group"},{"id":"/cvg/game_version/platform","n":"system"},{"id":"/cvg/game_version/peripherals_supported","n":"peripherals"},{"id":"/cvg/game_version/peripherals_supported","n":"contollers"},{"id":"/music/engineer/tracks_engineered","n":"tracks"},{"id":"/music/engineer/tracks_engineered","n":"songs"},{"id":"/film/film_festival/individual_festivals","n":"events"},
{"id":"/film/film_festival/individual_festivals","n":"years"},{"id":"/film/film_festival/sponsoring_organization","n":"sponsors"},{"id":"/time/time_zone/day_dst_begins","n":"daylight savings"},{"id":"/time/time_zone/day_dst_begins","n":"daylight savings time"},{"id":"/time/time_zone/day_dst_begins","n":"summer time"},{"id":"/time/time_zone/day_dst_begins","n":"dst"},{"id":"/time/time_zone/locations_in_this_time_zone","n":"cities"},{"id":"/time/time_zone/locations_in_this_time_zone","n":"places"},
{"id":"/time/time_zone/locations_in_this_time_zone","n":"locations"},{"id":"/religion/place_of_worship/religion","n":"faith"},{"id":"/religion/place_of_worship/religion","n":"religion"},{"id":"/theater/theater_designer/plays_designed","n":"plays"},{"id":"/military/military_conflict/casualties","n":"fatalities"},{"id":"/military/military_conflict/commanders","n":"leaders"},{"id":"/military/military_conflict/military_personnel_involved","n":"soldiers"},{"id":"/music/guitarist/guitars_played","n":"guitars"},
{"id":"/music/guitarist/guitars_played","n":"guitars used"},{"id":"/education/fraternity_sorority/colleges_and_universities","n":"schools"},{"id":"/education/fraternity_sorority/official_charity","n":"charity"},{"id":"/book/periodical_format/periodicals_in_this_format","n":"magazines"},{"id":"/book/periodical_format/periodicals_in_this_format","n":"newspapers"},{"id":"/location/uk_non_metropolitan_district/administrative_headquarters","n":"capital"},{"id":"/film/production_company/films","n":"movies"},
{"id":"/computer/programming_language/language_paradigms","n":"paradigm"},{"id":"/computer/programming_language/language_designers","n":"designer"},{"id":"/computer/programming_language/developers","n":"coders"},{"id":"/sports/sports_facility/teams","n":"home team"},{"id":"/sports/sports_facility/teams","n":"hometeam"},{"id":"/business/asset/owners","n":"owner"},{"id":"/astronomy/meteor_shower/source_of_meteor_shower","n":"origin"},{"id":"/astronomy/meteor_shower/source_of_meteor_shower","n":"source"},
{"id":"/biology/animal_breed/examples","n":"pets"},{"id":"/biology/animal_breed/examples","n":"animals"},{"id":"/biology/animal_breed/place_of_origin","n":"origin"},{"id":"/fictional_universe/character_gender/characters_of_this_gender","n":"characters"},{"id":"/business/business_operation/revenue","n":"income"},{"id":"/business/business_operation/revenue","n":"earnings"},{"id":"/business/business_operation/net_profit","n":"profit"},{"id":"/business/business_operation/assets","n":"assets"},{"id":"/business/business_operation/liabilities",
"n":"liabilities "},{"id":"/business/business_operation/competitive_space","n":"competition"},{"id":"/business/business_operation/major_customer","n":"customer"},{"id":"/business/business_operation/major_customer","n":"business partners"},{"id":"/location/administrative_division/country","n":"nation"},{"id":"/location/administrative_division/official_symbols","n":"symbols"},{"id":"/location/administrative_division/official_symbols","n":"symbolism"},{"id":"/film/music_contributor/film","n":"movies scored"},
{"id":"/film/music_contributor/film","n":"movies"},{"id":"/film/music_contributor/film","n":"films"},{"id":"/film/music_contributor/film","n":"films scored"},{"id":"/film/music_contributor/film","n":"scores"},{"id":"/film/music_contributor/film","n":"film scores"},{"id":"/baseball/baseball_division/teams","n":"baseball teams"},{"id":"/astronomy/asteroid/member_of_asteroid_family","n":"family"},{"id":"/fictional_universe/work_of_fiction/setting","n":"place"},{"id":"/fictional_universe/work_of_fiction/setting",
"n":"location"},{"id":"/fictional_universe/work_of_fiction/setting","n":"places"},{"id":"/fictional_universe/work_of_fiction/part_of_these_fictional_universes","n":"story"},{"id":"/fictional_universe/work_of_fiction/part_of_these_fictional_universes","n":"world"},{"id":"/fictional_universe/work_of_fiction/events","n":"plot"},{"id":"/celebrities/celebrity/sexual_relationships","n":"relationships"},{"id":"/celebrities/celebrity/sexual_relationships","n":"boyfriends"},{"id":"/celebrities/celebrity/sexual_relationships",
"n":"girlfriends"},{"id":"/celebrities/celebrity/sexual_relationships","n":"couples"},{"id":"/celebrities/celebrity/sexual_relationships","n":"partners"},{"id":"/celebrities/celebrity/rehab_history","n":"rehab"},{"id":"/celebrities/celebrity/substance_abuse_problems","n":"drug problems"},{"id":"/celebrities/celebrity/substance_abuse_problems","n":"drugs"},{"id":"/celebrities/celebrity/legal_entanglements","n":"law suits"},{"id":"/celebrities/celebrity/legal_entanglements","n":"legal problems"},{"id":"/celebrities/celebrity/legal_entanglements",
"n":"lawsuits"},{"id":"/celebrities/celebrity/celebrity_friends","n":"friends"},{"id":"/celebrities/celebrity/celebrity_friends","n":"friendships"},{"id":"/celebrities/celebrity/sexual_orientation","n":"orientation"},{"id":"/celebrities/celebrity/celebrity_rivals","n":"rivals"},{"id":"/celebrities/celebrity/celebrity_rivals","n":"enemies"},{"id":"/celebrities/celebrity/net_worth","n":"worth"},{"id":"/cricket/cricket_coach/current_team","n":"teams"},{"id":"/cricket/cricket_coach/current_team","n":"cricket team"},
{"id":"/cricket/cricket_coach/teams","n":"cricket team"},{"id":"/medicine/physician/medical_specialty","n":"specialty"},{"id":"/medicine/physician/medical_specialty","n":"focus"},{"id":"/medicine/physician/medical_specialty","n":"research subject"},{"id":"/film/writer/film","n":"movies"},{"id":"/film/writer/film","n":"films"},{"id":"/business/brand/owner_s","n":"owner"},{"id":"/business/brand/products","n":"toys"},{"id":"/sports/pro_athlete/sports_played_professionally","n":"sport"},{"id":"/olympics/olympic_athlete/demonstration_medals_won",
"n":"medals"},{"id":"/olympics/olympic_athlete/demonstration_medals_won","n":"olympic medals"},{"id":"/olympics/olympic_athlete/country","n":"nation"},{"id":"/olympics/olympic_athlete/medals_won","n":"medals"},{"id":"/time/calendar/days_of_week","n":"days"},{"id":"/time/calendar/days_of_year","n":"days in year"},{"id":"/cvg/game_series/games_in_series","n":"games"},{"id":"/projects/project_focus/projects","n":"planning"},{"id":"/computer/programming_language_developer/programming_languages_developed",
"n":"programming languages"},{"id":"/book/written_work/original_language","n":"language"},{"id":"/book/written_work/author","n":"writer"},{"id":"/book/written_work/author","n":"creator"},{"id":"/book/written_work/school_or_movement","n":"style"},{"id":"/book/written_work/part_of_series","n":"series"},{"id":"/comic_books/comic_book_character/cover_appearances","n":"covers"},{"id":"/comic_books/comic_book_character/created_by","n":"creator"},{"id":"/comic_books/comic_book_character/created_by","n":"maker"},
{"id":"/comic_books/comic_book_character/first_appearance","n":"debut"},{"id":"/comic_books/comic_book_character/first_appearance","n":"birth"},{"id":"/food/candy_bar/manufacturer","n":"creator "},{"id":"/food/candy_bar/manufacturer","n":"creator"},{"id":"/food/candy_bar/sold_in","n":"countries"},{"id":"/food/candy_bar/sold_in","n":"locations"},{"id":"/location/uk_region/headquarters","n":"capital"},{"id":"/protected_sites/governing_body_of_protected_sites/protected_sites_governed","n":"government"},
{"id":"/comic_books/comic_book_writer/comic_books_written","n":"comics"},{"id":"/business/employer/employees","n":"workers"},{"id":"/business/employer/employees","n":"staff"},{"id":"/business/employer/employees","n":"employees"},{"id":"/business/employer/number_of_employees","n":"number of workers"},{"id":"/spaceflight/satellite/launch_vehicle","n":"rocket"},{"id":"/spaceflight/satellite/launch_vehicle","n":"shuttle"},{"id":"/symbols/coat_of_arms/marshalled_coats_of_arms","n":"coats of arms"},{"id":"/symbols/coat_of_arms/variation_of_the_field",
"n":"division"},{"id":"/boats/ship/ship_builder","n":"builder"},{"id":"/boats/ship/place_built","n":"birthplace"},{"id":"/boats/ship/place_built","n":"birth place"},{"id":"/boats/ship/place_built","n":"building location"},{"id":"/boats/ship/means_of_propulsion","n":"propulsion"},{"id":"/boats/ship/means_of_propulsion","n":"motor"},{"id":"/boats/ship/means_of_propulsion","n":"sails"},{"id":"/computer/computer_processor/processor_family","n":"family"},{"id":"/computer/computer_processor/variants","n":"types"},
{"id":"/computer/computer_processor/used_in_computers","n":"computers"},{"id":"/computer/file_format/read_by","n":"programs"},{"id":"/computer/file_format/read_by","n":"software"},{"id":"/computer/file_format/contained_by","n":"creator"},{"id":"/medicine/symptom/symptom_of","n":"diseases"},{"id":"/medicine/symptom/symptom_of","n":"cause"},{"id":"/medicine/symptom/side_effect_of","n":"medications"},{"id":"/medicine/symptom/includes_symptoms","n":"types"},{"id":"/computer/software_genre/software_in_genre",
"n":"software"},{"id":"/boats/ship_builder/ships_built","n":"boats"},{"id":"/theater/theater_producer/plays_produced","n":"plays"},{"id":"/music/composition/includes","n":"parts"},{"id":"/music/composition/includes","n":"movements"},{"id":"/music/composition/recorded_as_album","n":"album"},{"id":"/music/composition/recorded_as_album","n":"albums"},{"id":"/music/composition/composer","n":"author"},{"id":"/music/composition/composer","n":"writer"},{"id":"/music/composition/composer","n":"creator"},
{"id":"/music/composition/recordings","n":"recordings"},{"id":"/music/composition/arrangements","n":"versions"},{"id":"/music/composition/place_composed","n":"place composed "},{"id":"/music/composition/place_composed","n":"place written"},{"id":"/music/composition/place_composed","n":"nationality"},{"id":"/music/composition/form","n":"form"},{"id":"/music/composition/lyrics_website","n":"lyrics"},{"id":"/common/image/size","n":"size"},{"id":"/film/film_crewmember/films_crewed","n":"films"},{"id":"/people/person/place_of_birth",
"n":"birthplace"},{"id":"/people/person/place_of_birth","n":"birth place"},{"id":"/people/person/place_of_birth","n":"born"},{"id":"/people/person/place_of_birth","n":"home town"},{"id":"/people/person/place_of_birth","n":"hometown"},{"id":"/people/person/nationality","n":"country"},{"id":"/people/person/nationality","n":"nationality"},{"id":"/people/person/nationality","n":"country of citizenship"},{"id":"/people/person/nationality","n":"citizenship"},{"id":"/people/person/religion","n":"belief system"},
{"id":"/people/person/religion","n":"beliefs"},{"id":"/people/person/religion","n":"faith"},{"id":"/people/person/religion","n":"worships"},{"id":"/people/person/religion","n":"creed"},{"id":"/people/person/religion","n":"church"},{"id":"/people/person/religion","n":"denomination"},{"id":"/people/person/date_of_birth","n":"birthday"},{"id":"/people/person/date_of_birth","n":"birth date"},{"id":"/people/person/date_of_birth","n":"birth day"},{"id":"/people/person/date_of_birth","n":"date of birth"},
{"id":"/people/person/date_of_birth","n":"birthdate"},{"id":"/people/person/gender","n":"sex"},{"id":"/people/person/parents","n":"mom"},{"id":"/people/person/parents","n":"mother"},{"id":"/people/person/parents","n":"dad"},{"id":"/people/person/parents","n":"father"},{"id":"/people/person/children","n":"kids"},{"id":"/people/person/children","n":"daughter"},{"id":"/people/person/children","n":"son"},{"id":"/people/person/children","n":"child"},{"id":"/people/person/children","n":"infant"},{"id":"/people/person/children",
"n":"baby"},{"id":"/people/person/children","n":"babies"},{"id":"/people/person/children","n":"boy"},{"id":"/people/person/children","n":"girl"},{"id":"/people/person/employment_history","n":"jobs"},{"id":"/people/person/employment_history","n":"resume"},{"id":"/people/person/employment_history","n":"employment"},{"id":"/people/person/spouse_s","n":"wife"},{"id":"/people/person/spouse_s","n":"wives"},{"id":"/people/person/spouse_s","n":"husband"},{"id":"/people/person/spouse_s","n":"spouse"},{"id":"/people/person/spouse_s",
"n":"partner"},{"id":"/people/person/spouse_s","n":"fiance"},{"id":"/people/person/spouse_s","n":"domestic partner"},{"id":"/people/person/spouse_s","n":"marriage"},{"id":"/people/person/spouse_s","n":"marriages"},{"id":"/people/person/spouse_s","n":"married to"},{"id":"/people/person/sibling_s","n":"sister"},{"id":"/people/person/sibling_s","n":"brother"},{"id":"/people/person/education","n":"alma mater"},{"id":"/people/person/education","n":"schooling"},{"id":"/people/person/education","n":"university"},
{"id":"/people/person/education","n":"college"},{"id":"/people/person/education","n":"school"},{"id":"/people/person/education","n":"training"},{"id":"/people/person/profession","n":"job"},{"id":"/people/person/profession","n":"career"},{"id":"/people/person/profession","n":"occupation"},{"id":"/people/person/profession","n":"line of work"},{"id":"/people/person/quotations","n":"quotes"},{"id":"/people/person/quotations","n":"sayings"},{"id":"/people/person/ethnicity","n":"race"},{"id":"/government/government_agency/jurisdiction",
"n":"constituency"},{"id":"/government/government_agency/jurisdiction","n":"jurisdiction"},{"id":"/government/government_agency/successor_agency","n":"successor"},{"id":"/education/dissertation/institution","n":"school"},{"id":"/astronomy/dwarf_planet/star_system","n":"star"},{"id":"/location/neighborhood/neighborhood_of","n":"city"},{"id":"/boats/ship_class/ships_in_class","n":"ships"},{"id":"/location/id_regency/regency_seat","n":"seat"},{"id":"/award/award_winner/awards_won","n":"awards"},{"id":"/award/award_winner/awards_won",
"n":"prizes"},{"id":"/award/award_winner/awards_won","n":"honours"},{"id":"/award/award_winner/awards_won","n":"medals"},{"id":"/award/award_winner/awards_won","n":"honors"},{"id":"/award/award_winner/awards_won","n":"trophies"},{"id":"/book/periodical_publisher/periodicals_published","n":"magazines"},{"id":"/book/periodical_publisher/periodicals_published","n":"newspapers"},{"id":"/music/group_member/membership","n":"bands"},{"id":"/music/group_member/membership","n":"groups"},{"id":"/music/group_member/membership",
"n":"projects"},{"id":"/music/group_member/membership","n":"group"},{"id":"/music/group_member/instruments_played","n":"instruments"},{"id":"/music/group_member/instruments_played","n":"musical instruments"},{"id":"/education/academic_institution/visiting_scholars_fellows_etc","n":"scholars"},{"id":"/education/academic_institution/visiting_scholars_fellows_etc","n":"fellows"},{"id":"/location/place_with_neighborhoods/neighborhoods","n":"neighborhoods"},{"id":"/location/place_with_neighborhoods/neighborhoods",
"n":"neighbourhoods"},{"id":"/location/place_with_neighborhoods/neighborhoods","n":"buroughs"},{"id":"/location/place_with_neighborhoods/neighborhoods","n":"community"},{"id":"/location/place_with_neighborhoods/neighborhoods","n":"communities"},{"id":"/location/place_with_neighborhoods/neighborhoods","n":"suburbs"},{"id":"/location/place_with_neighborhoods/neighborhoods","n":"subdivisions"},{"id":"/location/place_with_neighborhoods/neighborhoods","n":"boroughs"},{"id":"/location/place_with_neighborhoods/neighborhoods",
"n":"administrative divisions"},{"id":"/location/place_with_neighborhoods/neighborhoods","n":"townships"},{"id":"/location/place_with_neighborhoods/neighborhoods","n":"municipalities"},{"id":"/geography/body_of_water/bridges","n":"river"},{"id":"/geography/body_of_water/bridges","n":"stream"},{"id":"/geography/body_of_water/bridges","n":"lake"},{"id":"/geography/body_of_water/bridges","n":"bridge"},{"id":"/education/school_newspaper/school","n":"university"},{"id":"/opera/opera_genre/operas_in_this_genre",
"n":"operas"},{"id":"/religion/religious_practice/practice_of","n":"religions"},{"id":"/location/ru_autonomous_okrug/administrative_center","n":"capital"},{"id":"/chess/chess_player/games_played","n":"games"},{"id":"/chess/chess_player/games_played","n":"chess games"},{"id":"/book/book_subject/works","n":"books"},{"id":"/book/book_subject/works","n":"books about"},{"id":"/book/book_subject/works","n":"novels"},{"id":"/book/book_subject/musical_compositions_about_this_topic","n":"songs"},{"id":"/book/book_subject/musical_compositions_about_this_topic",
"n":"songs about"},{"id":"/book/book_subject/musical_compositions_about_this_topic","n":"lyrics about"},{"id":"/book/publishing_company/books_published","n":"books"},{"id":"/royalty/monarch/coronation_event","n":"coronation"},{"id":"/tv/tv_writer/tv_programs","n":"programs"},{"id":"/tv/tv_writer/tv_programs","n":"tv programs"},{"id":"/tv/tv_writer/tv_programs","n":"tv shows"},{"id":"/tv/tv_writer/tv_programs","n":"shows"},{"id":"/tv/tv_writer/tv_segments_written","n":"skits"},{"id":"/food/beer_style/alcohol_by_volume_range",
"n":"alcohol"},{"id":"/cvg/cvg_developer/games_developed","n":"video games"},{"id":"/cvg/cvg_developer/games_developed","n":"games"},{"id":"/cvg/cvg_developer/games_developed","n":"videogames"},{"id":"/business/business_location/address","n":"location"},{"id":"/business/business_location/in_shopping_center","n":"mall"},{"id":"/business/business_location/in_shopping_center","n":"plaza"},{"id":"/olympics/olympic_event_competition/venue","n":"stadium"},{"id":"/olympics/olympic_event_competition/medalists",
"n":"athletes"},{"id":"/olympics/olympic_event_competition/olympic_games_contested","n":"olympics"},{"id":"/computer/computer_manufacturer_brand/computer_models","n":"computers"},{"id":"/spaceflight/rocket_launch_site/operated_by","n":"space agency"},{"id":"/spaceflight/rocket_launch_site/controlling_country","n":"country"},{"id":"/computer/programming_language_designer/languages_designed","n":"computer  languages"},{"id":"/computer/programming_language_designer/languages_designed","n":"programming  languages"},
{"id":"/media_common/quotation_source/quotations","n":"quotes"},{"id":"/venture_capital/venture_funded_company/venture_investors","n":"investment firms"},{"id":"/venture_capital/venture_funded_company/venture_investors","n":"investors"},{"id":"/venture_capital/venture_funded_company/total_venture_investment_raised","n":"investment"},{"id":"/venture_capital/venture_funded_company/total_venture_investment_raised","n":"fundraising"},{"id":"/venture_capital/venture_funded_company/total_venture_investment_raised",
"n":"money"},{"id":"/baseball/baseball_team/team_stats","n":"statistics"},{"id":"/venture_capital/venture_investor/investments","n":"investments "},{"id":"/venture_capital/venture_investor/investments","n":"companies investmented "},{"id":"/venture_capital/venture_investor/investments","n":"businesses investmented "},{"id":"/venture_capital/venture_investor/investments","n":"businesses invested "},{"id":"/venture_capital/venture_investor/investments","n":"companies invested "},{"id":"/tv/tv_producer_type/tv_producers_of_this_type",
"n":"tv producers"},{"id":"/common/topic/image","n":"picture"},{"id":"/common/topic/image","n":"photo"},{"id":"/common/topic/image","n":"pic"},{"id":"/common/topic/webpage","n":"webpage"},{"id":"/business/consumer_product/official_webpage","n":"website"},{"id":"/business/consumer_product/company","n":"creator"},{"id":"/book/book_character/appears_in_book","n":"books"},{"id":"/book/book_character/appears_in_book","n":"novel"},{"id":"/book/book_character/appears_in_stories","n":"stories"},{"id":"/book/periodical/first_issue_date",
"n":"launch"},{"id":"/internet/website_category/sites","n":"websites"},{"id":"/metropolitan_transit/transit_stop/transit_lines","n":"lines"},{"id":"/metropolitan_transit/transit_stop/transit_lines","n":"trains"},{"id":"/metropolitan_transit/transit_stop/terminus_for_lines","n":"stops"},{"id":"/metropolitan_transit/transit_stop/terminus_for_lines","n":"trains"},{"id":"/organization/club_interest/clubs","n":"clubs"},{"id":"/cvg/cvg_platform/games","n":"videogames"},{"id":"/cvg/cvg_platform/games_on_this_platform",
"n":"games"},{"id":"/cvg/cvg_platform/games_on_this_platform","n":"videogames"},{"id":"/comic_strips/comic_strip/creator_of_strip","n":"creator"},{"id":"/comic_strips/comic_strip/creator_of_strip","n":"artist"},{"id":"/olympics/olympic_sport/athletes","n":"olympic athletes"},{"id":"/fictional_universe/fictional_organization_type/organizations","n":"clubs"},{"id":"/business/asset_owner/assets_owned","n":"assets"},{"id":"/games/playing_card_game_play_direction/card_games","n":"games"},{"id":"/ice_hockey/hockey_conference/teams",
"n":"hockey teams"},{"id":"/martial_arts/martial_artist/martial_art","n":"fighting style"},{"id":"/martial_arts/martial_artist/martial_art","n":"martial art"},{"id":"/martial_arts/martial_artist/instructor","n":"instructor"},{"id":"/martial_arts/martial_artist/instructor","n":"teacher"},{"id":"/martial_arts/martial_artist/martial_arts_students","n":"students"},{"id":"/location/in_division/administrative_headquarters","n":"capital"},{"id":"/book/magazine/place_of_publication","n":"country"},{"id":"/book/magazine/place_of_publication",
"n":"location"},{"id":"/film/producer/film","n":"movies"},{"id":"/time/event/locations","n":"place"},{"id":"/time/event/locations","n":"location"},{"id":"/time/event/locations","n":"spot"},{"id":"/time/event/locations","n":"area"},{"id":"/time/event/locations","n":"venue"},{"id":"/time/event/locations","n":"region"},{"id":"/time/event/people_involved","n":"people"},{"id":"/time/event/includes_event","n":"parts"},{"id":"/time/event/includes_event","n":"segments"},{"id":"/time/event/includes_event",
"n":"events"},{"id":"/time/event/instance_of_recurring_event","n":"part of event"},{"id":"/media_common/quotation/subjects","n":"theme"},{"id":"/media_common/quotation/source","n":"attribution"},{"id":"/media_common/quotation/source","n":"origin"},{"id":"/media_common/quotation/author","n":"writer"},{"id":"/media_common/quotation/author","n":"creator"},{"id":"/media_common/quotation/author","n":"speaker"},{"id":"/media_common/quotation/spoken_by_character","n":"spoken by character"},{"id":"/media_common/quotation/spoken_by_character",
"n":"character"},{"id":"/media_common/quotation/addressee","n":"audiance"},{"id":"/medicine/drug_class/drugs","n":"medications"},{"id":"/film/film_location/featured_in_films","n":"films"},{"id":"/film/film_location/featured_in_films","n":"movies"},{"id":"/games/game/designer","n":"maker"},{"id":"/games/game/number_of_players","n":"players"},{"id":"/opera/opera_company/operas_produced","n":"operas"},{"id":"/time/recurring_event/current_frequency","n":"frequency"},{"id":"/time/recurring_event/instances",
"n":"events"},{"id":"/computer/computer/manufacturer","n":"creator"},{"id":"/computer/computer/processor","n":"cpu"},{"id":"/computer/computer/key_designers","n":"designers"},{"id":"/computer/computer/compatible_oses","n":"os"},{"id":"/computer/computer/compatible_oses","n":"operating systems"},{"id":"/music/soundtrack/film","n":"movie"},{"id":"/music/instrument/variation","n":"types"},{"id":"/music/instrument/instrumentalists","n":"players"},{"id":"/music/instrument/instrumentalists","n":"musicians"},
{"id":"/music/instrument/instrumentalists","n":"professionals"},{"id":"/music/instrument/instrumentalists","n":"artists"},{"id":"/music/record_label/artist","n":"bands"},{"id":"/music/record_label/artist","n":"artists"},{"id":"/music/record_label/artist","n":"musicians"},{"id":"/basketball/basketball_coach/team","n":"basketball team"},{"id":"/basketball/basketball_coach/previous_teams","n":"teams"},{"id":"/cvg/gameplay_mode/games_with_this_mode","n":"games"},{"id":"/cvg/gameplay_mode/games_with_this_mode",
"n":"videogames"},{"id":"/cvg/gameplay_mode/games_with_this_mode","n":"computer games"},{"id":"/ice_hockey/hockey_player/hockey_position","n":"hockey position"},{"id":"/ice_hockey/hockey_player/hockey_position","n":"position"},{"id":"/ice_hockey/hockey_player/current_team","n":"team"},{"id":"/ice_hockey/hockey_player/current_team","n":"hockey team"},{"id":"/ice_hockey/hockey_player/former_team_s","n":"teams"},{"id":"/book/poem/verse_form","n":"form"},{"id":"/baseball/baseball_player/current_team",
"n":"team"},{"id":"/baseball/baseball_player/current_team","n":"baseball team"},{"id":"/baseball/baseball_player/current_team","n":"club"},{"id":"/baseball/baseball_player/position_s","n":"position"},{"id":"/baseball/baseball_player/position_s","n":"base"},{"id":"/baseball/baseball_player/bats","n":"batting"},{"id":"/baseball/baseball_player/bats","n":"at bats"},{"id":"/baseball/baseball_player/former_teams","n":"past teams"},{"id":"/baseball/baseball_player/batting_stats","n":"batting stats"},{"id":"/baseball/baseball_player/lifetime_batting_statistics",
"n":"batting stats"},{"id":"/law/patent_assignee/patents_assigned","n":"patents"},{"id":"/visual_art/visual_art_form/artworks","n":"pieces"},{"id":"/visual_art/visual_art_form/artworks","n":"works"},{"id":"/visual_art/visual_art_form/artworks","n":"art"},{"id":"/visual_art/visual_art_form/artists","n":"creators"},{"id":"/geography/mountaineer/first_ascents","n":"climbs"},{"id":"/book/newspaper_owner/newspapers_owned","n":"newspapers"},{"id":"/book/newspaper_owner/newspapers_owned","n":"papers"},{"id":"/sports/sports_equipment/sport_used_for",
"n":"sport"},{"id":"/sports/sports_equipment/sport_used_for","n":"use"},{"id":"/business/industry/companies","n":"companies"},{"id":"/business/industry/companies","n":"business"},{"id":"/business/industry/companies","n":"businesses"},{"id":"/business/industry/companies","n":"firms"},{"id":"/business/industry/trade_unions","n":"unions"},{"id":"/protected_sites/park_system/member_parks","n":"parks"},{"id":"/law/constitution/country","n":"country"},{"id":"/law/constitution/constitutional_convention",
"n":"summit"},{"id":"/cvg/computer_game_engine/used_for_computer_games","n":"games"},{"id":"/cvg/computer_game_engine/used_for_computer_games","n":"videogames"},{"id":"/cvg/computer_game_engine/used_for_computer_games","n":"computer games"},{"id":"/food/dish/cuisine","n":"nationality"},{"id":"/food/dish/ingredients","n":"ingredients "},{"id":"/sports/boxer/weight_division","n":"weight"},{"id":"/sports/boxer/weight_division","n":"weight class"},{"id":"/sports/boxer/weight_division","n":"division"},
{"id":"/broadcast/tv_channel/network","n":"tv network"},{"id":"/award/award/presented_by","n":"presenter"},{"id":"/geography/glacier/terminus","n":"end"},{"id":"/cvg/cvg_publisher/games_published","n":"video games"},{"id":"/cvg/cvg_publisher/games_published","n":"games"},{"id":"/cvg/cvg_publisher/games_published","n":"videogames"},{"id":"/music/lyricist/lyrics_written","n":"songs"},{"id":"/music/lyricist/lyrics_written","n":"tracks"},{"id":"/music/lyricist/lyrics_written","n":"lyrics"},{"id":"/music/track/artist",
"n":"musician"},{"id":"/music/track/song","n":"song"},{"id":"/music/track/place","n":"location"},{"id":"/music/track/contributions","n":"contributers"},{"id":"/music/track/lyrics_website","n":"lyrics"},{"id":"/music/track/lyrics_website","n":"words"},{"id":"/music/album/artist","n":"musician"},{"id":"/music/album/artist","n":"band"},{"id":"/music/album/artist","n":"creator"},{"id":"/music/album/artist","n":"performer"},{"id":"/music/album/contributor","n":"guests"},{"id":"/music/album/contributor",
"n":"guest musicians"},{"id":"/music/album/supporting_tours","n":"tour"},{"id":"/music/album/supporting_tours","n":"music tour"},{"id":"/music/album/supporting_tours","n":"international tour"},{"id":"/fictional_universe/fictional_universe/works_set_here","n":"books"},{"id":"/business/consumer_company/brands","n":"image"},{"id":"/visual_art/visual_art_medium/artworks","n":"paintings"},{"id":"/visual_art/visual_art_medium/artworks","n":"art"},{"id":"/visual_art/visual_art_medium/artworks","n":"works"},
{"id":"/visual_art/visual_art_medium/artworks","n":"pieces"},{"id":"/internet/top_level_domain_registry/domains","n":"domains"},{"id":"/cvg/cvg_genre/games","n":"games"},{"id":"/cvg/cvg_genre/games","n":"videogames"},{"id":"/religion/religious_text/religious_text_of","n":"worshipers"},{"id":"/religion/religious_text/religious_text_of","n":"followers"},{"id":"/religion/religious_text/religious_text_of","n":"believers"},{"id":"/location/uk_district/administrative_headquarters","n":"capital"},{"id":"/architecture/architectural_structure_owner/structures_owned",
"n":"structures"},{"id":"/architecture/architectural_structure_owner/structures_owned","n":"buildings"},{"id":"/architecture/architectural_structure_owner/structures_owned","n":"buildings owned"},{"id":"/comic_strips/comic_strip_character/comic_strips_appeared_in","n":"comic strips"},{"id":"/comic_strips/comic_strip_character/comic_strips_appeared_in","n":"comics"},{"id":"/computer/web_browser_extension/works_on_web_browser","n":"browser"},{"id":"/visual_art/visual_artist/artworks","n":"art"},{"id":"/visual_art/visual_artist/artworks",
"n":"works"},{"id":"/visual_art/visual_artist/artworks","n":"paintings"},{"id":"/visual_art/visual_artist/artworks","n":"pieces"},{"id":"/visual_art/visual_artist/associated_periods_or_movements","n":"movement"},{"id":"/visual_art/visual_artist/associated_periods_or_movements","n":"period"},{"id":"/visual_art/visual_artist/associated_periods_or_movements","n":"style"},{"id":"/visual_art/visual_artist/associated_periods_or_movements","n":"school"},{"id":"/visual_art/visual_artist/art_forms","n":"medium"},
{"id":"/visual_art/visual_artist/art_series","n":"collections"},{"id":"/film/film_distributor/films_distributed","n":"films"},{"id":"/film/film_distributor/films_distributed","n":"movies"},{"id":"/food/brewery_brand_of_beer/beers_produced","n":"beers"},{"id":"/protected_sites/natural_or_cultural_preservation_agency/natural_or_cultural_listings_maintained","n":"cultural listings"},{"id":"/music/musical_group/member","n":"people in"},{"id":"/music/musical_group/member","n":"bandmembers"},{"id":"/music/musical_group/member",
"n":"musicians"},{"id":"/music/musical_group/member","n":"artists"},{"id":"/music/musical_group/member","n":"player"},{"id":"/music/musical_group/member","n":"musician"},{"id":"/music/musical_group/member","n":"band members"},{"id":"/music/musical_group/member","n":"bandmates"},{"id":"/music/musical_group/member","n":"members"},{"id":"/music/producer/tracks_produced","n":"songs"},{"id":"/music/producer/tracks_produced","n":"tracks"},{"id":"/media_common/quotation_subject/quotations_about_this_subject",
"n":"quotes"},{"id":"/media_common/quotation_subject/quotations_about_this_subject","n":"quotations"},{"id":"/media_common/quotation_subject/quotations_about_this_subject","n":"sayings"},{"id":"/cvg/game_character/games","n":"games"},{"id":"/visual_art/art_subject/artwork_on_the_subject","n":"art"},{"id":"/visual_art/art_subject/artwork_on_the_subject","n":"artworks"},{"id":"/visual_art/art_subject/artwork_on_the_subject","n":"paintings"},{"id":"/visual_art/art_subject/artwork_on_the_subject","n":"pieces"},
{"id":"/visual_art/art_subject/artwork_on_the_subject","n":"works"},{"id":"/visual_art/art_subject/artwork_on_the_subject","n":"artwork"},{"id":"/visual_art/art_subject/art_series_on_the_subject","n":"series"},{"id":"/baseball/baseball_manager/current_team_managed","n":"team"},{"id":"/baseball/baseball_manager/current_team_managed","n":"team managed"},{"id":"/baseball/baseball_manager/current_team_managed","n":"baseball team"},{"id":"/film/film_subject/films","n":"movies"},{"id":"/film/film_subject/films",
"n":"films"},{"id":"/film/film_subject/films","n":"documentaries"},{"id":"/film/film_subject/films","n":"documentary"},{"id":"/film/film_subject/films","n":"films about"},{"id":"/film/film_subject/films","n":"movies about"},{"id":"/broadcast/broadcast/area_served","n":"audiance"},{"id":"/broadcast/broadcast/distributor","n":"publisher"},{"id":"/broadcast/broadcast/content","n":"material"},{"id":"/spaceflight/rocket_manufacturer/rockets_manufactured","n":"rockets"},{"id":"/medicine/disease_cause/diseases",
"n":"disease"},{"id":"/medicine/disease_cause/diseases","n":"condition"},{"id":"/medicine/disease_cause/diseases","n":"illness"},{"id":"/education/academic_post_title/people_with_this_title","n":"people"},{"id":"/education/academic_post_title/people_with_this_title","n":"academics"},{"id":"/education/academic_post_title/people_with_this_title","n":"researchers"},{"id":"/military/armed_force/personnel","n":"people"},{"id":"/military/armed_force/military_posts","n":"posts"},{"id":"/military/armed_force/military_combatant",
"n":"members"},{"id":"/military/armed_force/military_combatant","n":"countries"},{"id":"/military/armed_force/military_combatant","n":"participants"},{"id":"/opera/opera_director/operas_directed","n":"operas"},{"id":"/dining/cuisine/region_of_origin","n":"country"},{"id":"/dining/cuisine/dishes","n":"food"},{"id":"/aviation/airline/accidents","n":"disasters"},{"id":"/aviation/airline/accidents","n":"crashes"},{"id":"/geography/lake_type/lakes_of_this_type","n":"lakes"},{"id":"/sports/golf_course/facility",
"n":"club"},{"id":"/theater/theater_company/plays_produced","n":"plays"},{"id":"/american_football/football_player/current_team","n":"team"},{"id":"/american_football/football_player/current_team","n":"club"},{"id":"/american_football/football_player/position_s","n":"position"},{"id":"/american_football/football_player/position_s","n":"positions played"},{"id":"/american_football/football_player/former_teams","n":"earlier teams"},{"id":"/american_football/football_player/games","n":"matches"},{"id":"/book/illustrator/books_illustrated",
"n":"books"},{"id":"/spaceflight/rocket_engine/designed_by","n":"designer"},{"id":"/spaceflight/rocket_engine/manufactured_by","n":"manufacturer"},{"id":"/architecture/landscape_architect/landscape_project","n":"projects"},{"id":"/visual_art/art_owner/artworks_owned","n":"art"},{"id":"/visual_art/art_owner/artworks_owned","n":"artworks"},{"id":"/visual_art/art_owner/artworks_owned","n":"pieces"},{"id":"/digicams/digital_camera/street_price","n":"price"},{"id":"/digicams/digital_camera/supported_resolutions",
"n":"resolutions "},{"id":"/digicams/digital_camera/image_ratio","n":"image ratio"},{"id":"/digicams/digital_camera/manufacturer","n":"creator"},{"id":"/digicams/digital_camera/manufacturer","n":"maker"},{"id":"/architecture/building_function/buildings","n":"structures"},{"id":"/projects/project/project_focus","n":"outcome"},{"id":"/projects/project/budget","n":"projected budget"},{"id":"/projects/project/budget","n":"budget"},{"id":"/projects/project/actual_cost","n":"cost"},{"id":"/projects/project/actual_cost",
"n":"price"},{"id":"/projects/project/includes_smaller_projects","n":"plans"},{"id":"/film/film_company/films","n":"movies"},{"id":"/astronomy/star/planet_s","n":"satellites"},{"id":"/base/wordnet/word/sense","n":"meaning"},{"id":"/base/ontologies/ontology_instance/equivalent_instances","n":"sameas"},{"id":"/user/jg/default_domain/olympic_athlete/medals","n":"olympic medals"},{"id":"/user/jg/default_domain/olympic_athlete/medals","n":"gold medals"},{"id":"/user/skud/names/name_source/namesakes","n":"namesakes"},
{"id":"/user/skud/names/name_source/namesakes","n":"name sakes"},{"id":"/user/skud/names/name_source/namesakes","n":"tributes"},{"id":"/base/crime/lawyer/law_firm","n":"firm"},{"id":"/base/crime/lawyer/specialty","n":"focus"},{"id":"/user/skud/names/namesake/named_after","n":"name source"},{"id":"/user/skud/names/namesake/named_after","n":"namesource"},{"id":"/base/exhibitions/exhibition/venues","n":"locations"},{"id":"/base/mtgbase/magic_card/cost","n":"price"},{"id":"/user/sprocketonline/economics/legislation/passed_by",
"n":"author"},{"id":"/user/sprocketonline/economics/legislation/passed_by","n":"legislator"},{"id":"/base/argumentmaps/idea/progeny","n":"ideas"},{"id":"/base/argumentmaps/idea/included_in","n":"foundations"},{"id":"/base/argumentmaps/idea/includes","n":"types"},{"id":"/base/argumentmaps/idea/includes","n":"ideas"},{"id":"/base/wordnet/word_sense/antonym","n":"opposite"},{"id":"/base/wordnet/word_sense/participal_adjective","n":"adjective"},{"id":"/base/wordnet/word_sense/derived","n":"derivation"},
{"id":"/base/wordnet/word_sense/derived","n":"source"},{"id":"/base/wordnet/word_sense/derived","n":"etymology"},{"id":"/base/horseracing/racehorse/races","n":"events"},{"id":"/user/alexander/philosophy/idea/philosopher","n":"philosophers"},{"id":"/user/alexander/philosophy/idea/philosopher","n":"thinker"},{"id":"/base/rugby/rugby_player/played_on_team","n":"teams"},{"id":"/base/rugby/rugby_player/played_on_team","n":"clubs"},{"id":"/base/rugby/rugby_player/played_on_team","n":"rugby team"},{"id":"/base/thoroughbredracing/thoroughbred_racehorse/sex",
"n":"gender"},{"id":"/base/thoroughbredracing/thoroughbred_racehorse/foal_if_this_horse_is_sire","n":"foal"},{"id":"/base/thoroughbredracing/thoroughbred_racehorse/foal_if_this_horse_is_dam","n":"foal"},{"id":"/user/alexander/misc/murdered_person/murdered_by","n":"murderer"},{"id":"/user/alexander/misc/murdered_person/murdered_by","n":"killer"},{"id":"/base/infrastructure/power_station/fuel_type","n":"fuel"},{"id":"/base/infrastructure/power_station/supplies_municipality_most_directly","n":"city"},
{"id":"/base/bioventurist/science_or_technology_company/area_of_expertise","n":"technology"},{"id":"/base/crime/law_enforcement_authority/investigated_crimes","n":"crimes"},{"id":"/base/crime/law_enforcement_authority/investigated_crimes","n":"cases"},{"id":"/base/argumentmaps/motivated_event/motivation","n":"motivation"},{"id":"/base/argumentmaps/motivated_event/motivation","n":"reason for"},{"id":"/base/argumentmaps/motivated_event/motivation","n":"reasoning"},{"id":"/base/argumentmaps/motivated_event/motivation",
"n":"cause"},{"id":"/base/argumentmaps/motivated_event/motive","n":"history"},{"id":"/base/activism/activist/area_of_activism","n":"causes"},{"id":"/base/activism/activist/area_of_activism","n":"activism"},{"id":"/base/activism/activist/area_of_activism","n":"activist causes"},{"id":"/base/activism/activist/area_of_activism","n":"protest subjects"},{"id":"/base/vancouver/location_in_neighborhood/neighborhood","n":"burrough"},{"id":"/base/events/festival_series/festivals","n":"event"},{"id":"/base/events/festival_series/festivals",
"n":"parties"},{"id":"/base/events/festival_series/festivals","n":"events"},{"id":"/base/events/festival_series/type_of_festival","n":"celebration"},{"id":"/base/events/festival_series/geographical_scope","n":"location"},{"id":"/base/events/festival_series/geographical_scope","n":"area"},{"id":"/user/robert/ranked_lists/ranked_list_item/appears_in_ranked_lists","n":"rank"},{"id":"/base/marchmadness/ncaa_basketball_tournament_stage/games","n":"matches"},{"id":"/base/crime/convicted_criminal/convictions",
"n":"crimes"},{"id":"/base/crime/convicted_criminal/convictions","n":"prosecutions"},{"id":"/base/famouspets/pet_owner/pets_owned","n":"pets"},{"id":"/base/famouspets/pet_owner/pets_owned","n":"animals"},{"id":"/base/saints/saint/feast_day","n":"feast"},{"id":"/base/marchmadness/ncaa_basketball_tournament_game/winning_team","n":"winner"},{"id":"/base/animemanga/anime_manga_genre/anime_manga_franchises","n":"franchises "},{"id":"/base/animemanga/anime_manga_genre/anime_manga_franchises","n":"anime"},
{"id":"/base/animemanga/anime_manga_genre/anime_manga_franchises","n":"manga"},{"id":"/user/venkytv/default_domain/mythological_figure/mythology","n":"mythology"},{"id":"/base/animemanga/manga_author/manga_titles_written","n":"manga"},{"id":"/base/handball/handball_player/matches_played","n":"matches"},{"id":"/base/handball/handball_player/disciplinary_action","n":"penalties"},{"id":"/base/americancomedy/comedian/performed_in_venues","n":"venues"},{"id":"/user/skud/boats/vessel/vessel_class","n":"class"},
{"id":"/user/skud/boats/vessel/built_by","n":"builder"},{"id":"/user/skud/boats/vessel/built_at_shipyard","n":"shipyard"},{"id":"/base/fight/sports_official/sports_association","n":"league"},{"id":"/user/joehughes/default_domain/transit_service_area/transit_agencies","n":"transit"},{"id":"/user/akatenev/weapons/weapon/country_of_origin","n":"country"},{"id":"/user/akatenev/weapons/weapon/country_of_origin","n":"nationality"},{"id":"/user/akatenev/weapons/weapon/supply_to","n":"buyers"},{"id":"/base/folklore/mythical_creature/works_written_about_this_creature",
"n":"books"},{"id":"/base/folklore/mythical_creature/works_written_about_this_creature","n":"research"},{"id":"/base/folklore/mythical_creature/area_of_occurrence","n":"location"},{"id":"/base/folklore/mythical_creature/named_creatures_of_this_type","n":"creatures"},{"id":"/user/rcheramy/default_domain/hockey_team/arena","n":"rink"},{"id":"/user/rcheramy/default_domain/hockey_team/arena","n":"stadium"},{"id":"/base/adultentertainment/adult_entertainer/specialises_in_sex_acts","n":"specialties"},{"id":"/base/adultentertainment/adult_entertainer/specialises_in_sex_acts",
"n":"specialty "},{"id":"/base/adultentertainment/adult_entertainer/specialises_in_fetishes","n":"fetishes"},{"id":"/base/adultentertainment/adult_entertainer/sexual_orientation","n":"orientation"},{"id":"/base/argumentmaps/original_idea/first_appears_in_work","n":"source"},{"id":"/base/argumentmaps/original_idea/first_appears_in_work","n":"origin"},{"id":"/base/argumentmaps/original_idea/first_appears_in_work","n":"publication"},{"id":"/base/argumentmaps/original_idea/discovered_during_event","n":"discovery"},
{"id":"/base/argumentmaps/original_idea/innovator","n":"inventor"},{"id":"/base/argumentmaps/original_idea/innovator","n":"inventer"},{"id":"/base/argumentmaps/original_idea/innovator","n":"thinker"},{"id":"/base/argumentmaps/original_idea/variations_of_this_idea","n":"forms"},{"id":"/base/animemanga/anime_director/anime_directing_credits","n":"anime"},{"id":"/base/popstra/celebrity/dated","n":"boyfriends"},{"id":"/base/popstra/celebrity/dated","n":"girlfriends"},{"id":"/base/popstra/celebrity/friendship",
"n":"friends"},{"id":"/base/popstra/celebrity/friendship","n":"mates"},{"id":"/base/popstra/celebrity/canoodled","n":"sex partners"},{"id":"/base/popstra/celebrity/canoodled","n":"slept with"},{"id":"/base/popstra/celebrity/infidelity_perpetrator","n":"cheated on"},{"id":"/base/popstra/celebrity/lived_with","n":"roomates"},{"id":"/base/popstra/celebrity/wears","n":"fashion"},{"id":"/base/popstra/celebrity/eats_at","n":"restaurants"},{"id":"/base/popstra/celebrity/shops_at","n":"stores"},{"id":"/user/jonathanwlowe/us_census_2000/statistical_region/p001001",
"n":"population"},{"id":"/user/jonathanwlowe/us_census_2000/statistical_region/p001001","n":"headcount"},{"id":"/user/jonathanwlowe/us_census_2000/statistical_region/p003003","n":"white population"},{"id":"/user/jonathanwlowe/us_census_2000/statistical_region/p003004","n":"black population"},{"id":"/user/jonathanwlowe/us_census_2000/statistical_region/p003006","n":"asian population"},{"id":"/user/jonathanwlowe/us_census_2000/statistical_region/p004002","n":"latino population"},{"id":"/user/jonathanwlowe/us_census_2000/statistical_region/p005002",
"n":"adult population"},{"id":"/user/jonathanwlowe/us_census_2000/statistical_region/p012002","n":"male population"},{"id":"/user/jonathanwlowe/us_census_2000/statistical_region/p012026","n":"female population"},{"id":"/user/jonathanwlowe/us_census_2000/statistical_region/p013002","n":"average age"},{"id":"/user/jonathanwlowe/us_census_2000/statistical_region/p014001","n":"child population"},{"id":"/base/reviews/review/reviewer","n":"critic"},{"id":"/base/adultentertainment/adult_media/sexual_acts_portrayed",
"n":"sexual acts"},{"id":"/base/adultentertainment/adult_media/sexual_acts_portrayed","n":"sex acts"},{"id":"/base/adultentertainment/adult_media/sexual_fetishes_portrayed","n":"fetishes"},{"id":"/user/alexander/philosophy/philosopher/schools","n":"school"},{"id":"/user/alexander/philosophy/philosopher/schools","n":"discipline"},{"id":"/user/alexander/philosophy/philosopher/notable_ideas","n":"ideas"},{"id":"/user/alexander/philosophy/philosopher/notable_ideas","n":"thoughts"},{"id":"/user/alexander/philosophy/philosopher/influenced",
"n":"readers"},{"id":"/user/alexander/philosophy/philosopher/interests","n":"focus"}],"metaschema":[{"name":"HasPlaceOfOrigin","search":"origin","id":"/base/fbontology/metaschema/predicate_id/hasplaceoforigin"},{"name":"Portrayed","search":"portrayed","id":"/base/fbontology/metaschema/predicate_id/portrayed"},{"name":"PortrayedBy","search":"portrayed_by","id":"/base/fbontology/metaschema/predicate_id/portrayedby"},{"name":"HasCategory","search":"category","id":"/base/fbontology/metaschema/predicate_id/hascategory"},
{"name":"Administers","search":"administers","id":"/base/fbontology/metaschema/predicate_id/administers"},{"name":"AdministeredBy","search":"administered_by","id":"/base/fbontology/metaschema/predicate_id/administeredby"},{"name":"OccursIn","search":"occurs_in","id":"/base/fbontology/metaschema/predicate_id/occursin"},{"name":"Produced","search":"produced","id":"/base/fbontology/metaschema/predicate_id/produced"},{"name":"ProducedBy","search":"produced_by","id":"/base/fbontology/metaschema/predicate_id/producedby"},
{"name":"HasLocation","search":"location","id":"/base/fbontology/metaschema/predicate_id/haslocation"},{"name":"HasTitle","search":"title","id":"/base/fbontology/metaschema/predicate_id/hastitle"},{"name":"HasPart","search":"part","id":"/base/fbontology/metaschema/predicate_id/haspart"},{"name":"PartOf","search":"part_of","id":"/base/fbontology/metaschema/predicate_id/partof"},{"name":"ComposedOf","search":"made_of","id":"/base/fbontology/metaschema/predicate_id/composedof"},{"name":"ParticipatedIn",
"search":"participated_in","id":"/base/fbontology/metaschema/predicate_id/participatedin"},{"name":"HasParticipant","search":"participant","id":"/base/fbontology/metaschema/predicate_id/hasparticipant"},{"name":"Discovered","search":"discovered","id":"/base/fbontology/metaschema/predicate_id/discovered"},{"name":"DiscoveredBy","search":"discovered_by","id":"/base/fbontology/metaschema/predicate_id/discoveredby"},{"name":"HasStatus","search":"status","id":"/base/fbontology/metaschema/predicate_id/hasstatus"},
{"name":"PractitionerOf","search":"practitioner_of","id":"/base/fbontology/metaschema/predicate_id/practitionerof"},{"name":"HasPractitioner","search":"practitioner","id":"/base/fbontology/metaschema/predicate_id/haspractitioner"},{"name":"HasServiceArea","search":"service_area","id":"/base/fbontology/metaschema/predicate_id/hasservicearea"},{"name":"HasChild","search":"child","id":"/base/fbontology/metaschema/predicate_id/haschild"},{"name":"HasParent","search":"parent","id":"/base/fbontology/metaschema/predicate_id/hasparent"},
{"name":"HasPublication","search":"publication","id":"/base/fbontology/metaschema/predicate_id/haspublication"},{"name":"PublicationOf","search":"publication_of","id":"/base/fbontology/metaschema/predicate_id/publicationof"},{"name":"MemberOf","search":"member_of","id":"/base/fbontology/metaschema/predicate_id/memberof"},{"name":"LeaderOf","search":"leader_of","id":"/base/fbontology/metaschema/predicate_id/leaderof"},{"name":"HasLeader","search":"leader","id":"/base/fbontology/metaschema/predicate_id/hasleader"},
{"name":"HasOwner","search":"owner","id":"/base/fbontology/metaschema/predicate_id/hasowner"},{"name":"Owns","search":"owns","id":"/base/fbontology/metaschema/predicate_id/owns"},{"name":"PeerOf","search":"peer_of","id":"/base/fbontology/metaschema/predicate_id/peerof"},{"name":"ExhibitedAt","search":"exhibited_at","id":"/base/fbontology/metaschema/predicate_id/exhibitedat"},{"name":"Exhibited","search":"exhibited","id":"/base/fbontology/metaschema/predicate_id/exhibited"},{"name":"DistributedBy",
"search":"distributed_by","id":"/base/fbontology/metaschema/predicate_id/distributedby"},{"name":"HasName","search":"name","id":"/base/fbontology/metaschema/predicate_id/hasname"},{"name":"SuperclassOf","search":"superclass_of","id":"/base/fbontology/metaschema/predicate_id/superclassof"},{"name":"SubclassOf","search":"subclass_of","id":"/base/fbontology/metaschema/predicate_id/subclassof"},{"name":"TookPlaceAt","search":"tookplace_at","id":"/base/fbontology/metaschema/predicate_id/tookplaceat"},
{"name":"HasFictionalRelationship","search":"fiction_link","id":"/base/fbontology/metaschema/predicate_id/hasfictionalrelationship"},{"name":"HasGenre","search":"genre","id":"/base/fbontology/metaschema/predicate_id/hasgenre"},{"name":"SucceededBy","search":"succeeded_by","id":"/base/fbontology/metaschema/predicate_id/succeededby"},{"name":"Succeeds","search":"succeeds","id":"/base/fbontology/metaschema/predicate_id/succeeds"},{"name":"UsePermittedBy","search":"use_permitted_by","id":"/base/fbontology/metaschema/predicate_id/usepermittedby"},
{"name":"PermitsUseOf","search":"permits_use_of","id":"/base/fbontology/metaschema/predicate_id/permitsuseof"},{"name":"ContributedTo","search":"contributed_to","id":"/base/fbontology/metaschema/predicate_id/contributedto"},{"name":"HasContributor","search":"contributor","id":"/base/fbontology/metaschema/predicate_id/hascontributor"},{"name":"HasIdentifier","search":"name","id":"/base/fbontology/metaschema/predicate_id/hasidentifier"},{"name":"Identifies","search":"identifies","id":"/base/fbontology/metaschema/predicate_id/identifies"},
{"name":"HasCenter","search":"center","id":"/base/fbontology/metaschema/predicate_id/hascenter"},{"name":"CenterFor","search":"center_for","id":"/base/fbontology/metaschema/predicate_id/centerfor"},{"name":"HasCharacter","search":"character","id":"/base/fbontology/metaschema/predicate_id/hascharacter"},{"name":"AppearsIn","search":"appears_in","id":"/base/fbontology/metaschema/predicate_id/appearsin"},{"name":"BroaderThan","search":"broader_than","id":"/base/fbontology/metaschema/predicate_id/broaderthan"},
{"name":"NarrowerThan","search":"narrower_than","id":"/base/fbontology/metaschema/predicate_id/narrowerthan"},{"name":"ExpressedBy","search":"expressed_by","id":"/base/fbontology/metaschema/predicate_id/expressedby"},{"name":"HasCertification","search":"certification","id":"/base/fbontology/metaschema/predicate_id/hascertification"},{"name":"CertificationOf","search":"certification_of","id":"/base/fbontology/metaschema/predicate_id/certificationof"},{"name":"HasPreceedingWork","search":"preceeding",
"id":"/base/fbontology/metaschema/predicate_id/haspreceedingwork"},{"name":"HasSubsequentWork","search":"subsequent","id":"/base/fbontology/metaschema/predicate_id/hassubsequentwork"},{"name":"Created","search":"created","id":"/base/fbontology/metaschema/predicate_id/created"},{"name":"CreatedBy","search":"created_by","id":"/base/fbontology/metaschema/predicate_id/createdby"},{"name":"HasAdaptation","search":"adaptation","id":"/base/fbontology/metaschema/predicate_id/hasadaptation"},{"name":"AdaptationOf",
"search":"adaptation_of","id":"/base/fbontology/metaschema/predicate_id/adaptationof"},{"name":"HasMeasurement","search":"number","id":"/base/fbontology/metaschema/predicate_id/hasmeasurement"},{"name":"HasAbstraction","search":"abstraction","id":"/base/fbontology/metaschema/predicate_id/hasabstraction"},{"name":"AbstractionOf","search":"abstraction_of","id":"/base/fbontology/metaschema/predicate_id/abstractionof"},{"name":"HasMeansOfDemise","search":"means_of_demise","id":"/base/fbontology/metaschema/predicate_id/hasmeansofdemise"},
{"name":"HasSubject","search":"subject","id":"/base/fbontology/metaschema/predicate_id/hassubject"}],"is_a":["/amusement_parks/ride/ride_type","/amusement_parks/roller_coaster/propulsion","/amusement_parks/roller_coaster/train_configuration","/architecture/building/building_function","/architecture/museum/type_of_museum","/astronomy/asteroid/spectral_type","/astronomy/celestial_object/category","/astronomy/extraterrestrial_location/type_of_planetographic_feature","/astronomy/galaxy/galaxy_classification_hubble",
"/astronomy/galaxy_classification_code/galaxy_shape","/astronomy/near_earth_object/near_earth_object_classification","/astronomy/orbital_relationship/orbit_type","/astronomy/star/spectral_type","/astronomy/telescope/type_of_telescope","/automotive/model/automotive_class","/automotive/transmission/classification","/aviation/aircraft_model/aircraft_type","/aviation/airliner_accident/accident_type","/aviation/airport/airport_type","/aviation/aviation_waypoint/waypoint_type","/award/competition/type_of_competition",
"/bicycles/bicycle_model/bicycle_type","/biology/breed_registration/breed_group","/biology/fossil_specimen/organism","/biology/gene_group_membership/group","/biology/gene_ontology_group/group_type","/biology/organism/organism_type","/biology/organism/sex","/biology/organism_classification/rank","/biology/pedigreed_animal/breed","/boats/ship/ship_class","/boats/ship_class/ship_type","/book/book_edition/binding","/book/periodical_format_period/format","/book/poem/verse_form","/book/short_non_fiction/mode_of_writing",
"/business/consumer_product/category","/business/issue/type_of_issue","/business/product_line/category","/celebrities/sexual_orientation_phase/sexual_orientation","/chemistry/chemical_compound/classifications","/chemistry/chemical_element/chemical_series","/chemistry/chemical_element/periodic_table_block","/computer/computer_peripheral/peripheral_class","/computer/file_format/genre","/conferences/conference_series/type_of_conference","/cricket/cricket_match/match_type","/cvg/computer_videogame/gameplay_modes",
"/digicams/digital_camera/format","/distilled_spirits/blended_spirit/style","/distilled_spirits/distilled_spirit/spirit_type","/distilled_spirits/infused_spirit/infusion_style","/education/educational_institution/school_type","/education/fraternity_sorority/fraternity_sorority_type","/engineering/battery/cell_type","/engineering/battery/size","/engineering/battery_size/shape_format","/engineering/engine/category","/engineering/piston_engine/cooling_method","/engineering/piston_engine/fuel_delivery_method",
"/engineering/piston_engine/piston_configuration","/engineering/piston_engine/valvetrain_configuration","/engineering/power_plug_standard/plug_type","/event/disaster/type_of_disaster","/event/speech_or_presentation/type_or_format_of_presentation","/exhibitions/exhibition/exhibition_types","/fashion/textile/weave","/fictional_universe/fictional_setting/setting_type","/film/film/film_format","/food/beer/beer_style","/food/beer_style/bjcp_style_category","/food/cheese/texture","/food/dish/type_of_dish1",
"/food/drinking_establishment/drinking_establishment_type","/food/tea/tea_type","/food/wine_style/wine_types","/geography/geographical_feature/category","/geography/glacier/glacier_type","/geography/lake/lake_type","/geography/mountain/listings","/geography/mountain/mountain_type","/geography/waterfall/waterfall_type","/government/government_office_or_title/category","/government/government_position_held/basic_title","/interests/collectable_item/collection_category","/internet/top_level_domain/domain_type",
"/language/conlang/conlang_type","/language/language_writing_system/type_of_writing","/law/us_patent/international_classification","/law/us_patent/us_classification_category","/law/us_patent/us_patent_type","/location/administrative_division_capital_relationship/capital_type","/location/country/form_of_government","/location/location_symbol_relationship/Kind_of_symbol","/martial_arts/martial_art/category","/medicine/cancer_center/cancer_center_type","/medicine/drug/drug_class","/medicine/drug/mechanism_of_action",
"/medicine/drug_formulation/dosage_form","/medicine/drug_formulation/drug_category","/medicine/hospital_ownership/ownership_status","/medicine/infectious_disease/infectious_agent_type","/medicine/medical_trial/design","/medicine/medical_trial/phase","/medicine/medical_trial/type_of_trial","/meteorology/cloud/classification","/meteorology/tropical_cyclone/category","/metropolitan_transit/transit_line/service_type","/military/military_unit/unit_size","/music/album/release_type","/music/composition/form",
"/music/opera_singer/voice_type","/music/release/format","/organization/organization/legal_structure","/organization/organization/organization_type","/people/person/ethnicity","/people/person/gender","/physics/particle/family","/physics/particle/generation","/protected_sites/natural_or_cultural_site_designation/categories","/protected_sites/natural_or_cultural_site_listing/designation","/protected_sites/protected_site/iucn_category","/rail/locomotive_class/gauge","/rail/railway_gauge_relationship/gauge",
"/rail/railway_type_relationship/railway_type","/rail/steam_locomotive_class/fuel_type","/rail/steam_locomotive_class/wheel_configuration","/religion/place_of_worship/religion","/religion/place_of_worship/type_of_place_of_worship","/religion/place_of_worship_historical_use/religion","/religion/religious_leadership_jurisdiction/size_or_type","/royalty/chivalric_rank/gender","/royalty/noble_rank/gender","/royalty/order_of_chivalry/category","/skiing/lift_tenure/lift_type","/skiing/ski_run/rating","/spaceflight/bipropellant_rocket_engine/engine_cycle",
"/spaceflight/rocket/rocket_function","/spaceflight/satellite/primary_use","/sports/boxer/weight_division","/time/holiday/type_of_holiday","/transportation/bridge/bridge_type","/travel/accommodation/accommodation_type","/visual_art/artwork/art_form","/wine/wine/color","/wine/wine/wine_style","/wine/wine/wine_type","/zoos/zoo/category","/people/person/profession","/soccer/football_player/position_s","/american_football/football_historical_roster_position/position_s","/american_football/football_player/position_s",
"/american_football/football_roster_position/position","/baseball/baseball_player/position_s","/baseball/baseball_roster_position/position","/basketball/basketball_player/position_s","/basketball/basketball_roster_position/position","/ice_hockey/hockey_player/hockey_position","/ice_hockey/hockey_roster_position/position","/soccer/football_player/position_s","/soccer/football_roster_position/position"]};


var async_max=10;//the hardest we will ever concurrently hit freebase

//non-front-facing methods that are used for the freebase javascript package

var fns={}

var globals={
  host:'https://www.googleapis.com/freebase/v1/',
  image_host:"https://usercontent.googleapis.com/freebase/v1/image",
  geosearch:'http://api.freebase.com/api/service/geosearch',
  wikipedia_host:'http://en.wikipedia.org/w/api.php'
}


//compact even empty objects
fns.compact_strong=function(arr){
  return _.unique(_.compact(arr)).filter(function(v){
    return _.isEmpty(v)==false
  })
}


fns.settle_params=function(params,method,defaults){
  var o={
    valid:false,
    q:params[0],
    options:params[1] || {},
    callback:params[2] || console.log,
    defaults:defaults || {},
    method:method||''
  }
   //flexible parameters
  if(typeof o.options=="function"){
    o.callback=o.options;
    o.options={};
  }
  //fancy callback wrapper
  if(o.options.verbose){
    var tmp=o.callback
    o.callback=function(r){
     console.log('hi')
      return tmp(r)
    }
  }
    //handle an array
  if(_.isArray(o.q)){
    if( o.q.length>1){
      o.q=fns.compact_strong(o.q);
      o.valid=true;
      o.array=true;
      return o
    }else{
      o.q=o.q[0];//just use the first element
    }
  }
  //if its a freebase-type object
  if(_.isObject(o.q)){
      o.q = o.q.id||o.q.mid||o.q.name;
   }
  //make sure we're sane
  if(typeof o.q !="string" || typeof o.options !="object" || typeof o.callback !="function"){
    return o;
  }
  //handle an id
  if(o.q.match(/\/.*?\/.*?/)){
    o.is_id=true;
  }
  //set default options
  for(var i in o.defaults){
    o.options[i]=o.options[i]||o.defaults[i];
  }
  //remove whitespace
  o.q=o.q.replace(/  /,' ');
  o.q=o.q.replace(/^\s+|\s+$/, '');
  //if it's a url, clean it up
  if(o.q.match(/^(https?:\/\/|www\.)/)){
    o.q=o.q.replace(/\/$/,'');
    o.q=o.q.replace(/^https/,'http');
    o.url=true;
   }
  o.valid=true;
  return o
}

//sort by frequency
fns.topk=function(myArray,length){
  var newArray = [];
  length = length ||1
  var freq = {};
  //Count Frequency of Occurances
  var i=myArray.length-1;
  for (var i;i>-1;i--)
  {
    var value = myArray[i];
    freq[value]==null?freq[value]=1:freq[value]++;
  }
  //convert to sortable array
  for (var value in freq)
  {
    newArray.push(value);
  }
  return newArray.sort(function(a,b){return freq[b]-freq[a];}).map(function(v){
    return {value:v, count:freq[v], percentage: ((freq[v]/length)*100).toFixed(2)}
  });
}

fns.percentage=function(a,b){
  return parseInt((a/b)*100)
}

//encode wikipedia title to freebase id
// fns.wikipedia_to_freebase=function(title){
//   return
// }




//////*********
//kill the freebase internal-properties that don't feel graphy
fns.kill_boring=function(obj){
  if(!obj){return {}}
  data.boring.forEach(function(v){delete obj[v]})
  return obj
}

//****************************
fns.parse_topic_api=function(properties, options) {
  var out = [];
  properties = fns.kill_boring(properties)
  Object.keys(properties).forEach(function(key) {
    var v = properties[key];
    //add topics
    if(v.valuetype == "object") {
      v.values = v.values.map(function(s) {
        s.property = key;
        return s
      })
      out = out.concat(v.values)
    }
    //add the topics from cvt values in the same manner
    if(v.valuetype == "compound") {
      v.values.forEach(function(c) {
        c.property = fns.kill_boring(c.property);
        Object.keys(c.property).forEach(function(key2) {
          if(c.property[key2].valuetype == "object") {
            c.property[key2].values = c.property[key2].values.map(function(s) {
              s.property = [key, key2];
              return s
            })
            out = out.concat(c.property[key2].values)
          }
        })
      })
    }
  })
  out = out.map(function(o) {
    return {
      name: o.text,
      id: o.id,
      property: o.property
    }
  })
  out = out.map(function(o) {
    if(_.isArray(o.property)) {
      o.property = o.property.join('');
    }
    return o
  })
  return out;
}

///////**************
//lookup metaschema predicate matches offline..
fns.metaschema_lookup=function(property){
  property=property.toLowerCase();
  property=property.replace(/\W(is|was|are|will be|has been)\W/,' ');
  property=property.replace(/  /g,' ');
  property=property.replace(/_/g,' ');
  property=property.replace(/^\s+|\s+$/, '');
  var candidate_properties=data.metaschema.filter(function(v){
    v.aliases=v.aliases||[]
    return v.id==property || v.name.toLowerCase()==property || fns.isin(property, v.aliases) || v.search.replace(/_/g,' ')==property
  })[0]
  candidate_properties=candidate_properties||{}
  return candidate_properties.search;
}
//console.log(metaschema_lookup('built with'))

/////*****************************
// fns.list_category_like=function(q, options, callback){
//   callback=callback||console.log;
//   if(!q){return callback({})}
//   options=options||{};
//   q=fns.singularize(q);
//   freebase.topic(q, options, function(r){
//     if(!r || !r.property || !_.isObject(r.property) ){return callback([])}
//     var all=Object.keys(r.property).filter(function(v){
//       return fns.isin(v, data.category_like)
//     }).map(function(p){
//       //add the property
//       r.property[p].values=r.property[p].values.map(function(v){
//         v.property=p;
//         return v;
//       })
//       return r.property[p].values
//     })
//     all=_.flatten(all);
//     return callback(all)
//   })
// }
//list_category_like("city")

//originally by david huynh 2010, http://www.freebase.com/appeditor/#!path=//cubed.dfhuynh.user.dev/index
//Algorithm is adopted from
//http://www.csse.monash.edu.au/~damian/papers/HTML/Plurals.html
fns.singularize = function(text) {
  if(text.match(' ')) { //multiple words
    var words = text.split(' ');
    var last = words[words.length - 1];
    var firsts = words.slice(0, -1);
    return firsts.join(" ") + ' ' + fns.singularize(last);
  }
  var prepositions = {
    "about": 1,
    "above": 1,
    "across": 1,
    "after": 1,
    "against": 1,
    "along": 1,
    "among": 1,
    "around": 1,
    "at": 1,
    "before": 1,
    "behind": 1,
    "below": 1,
    "beneath": 1,
    "beside": 1,
    "between": 1,
    "beyond": 1,
    "but": 1,
    "by": 1,
    "despite": 1,
    "down": 1,
    "during": 1,
    "except": 1,
    "for": 1,
    "from": 1,
    "in": 1,
    "inside": 1,
    "into": 1,
    "like": 1,
    "near": 1,
    "of": 1,
    "off": 1,
    "on": 1,
    "onto": 1,
    "out": 1,
    "outside": 1,
    "over": 1,
    "past": 1,
    "since": 1,
    "through": 1,
    "throughout": 1,
    "till": 1,
    "to": 1,
    "toward": 1,
    "under": 1,
    "underneath": 1,
    "until": 1,
    "up": 1,
    "upon": 1,
    "with": 1,
    "within": 1,
    "without": 1
  };
  var userDefinedNouns = [{
    "p": "people",
    "s": "person"
  }, {
    "p": "tornadoes",
    "s": "tornado"
  }, {
    "p": "churches",
    "s": "church"
  }, {
    "p": "countries",
    "s": "country"
  }, {
    "p": "cities",
    "s": "city"
  }, {
    "p": "companies",
    "s": "company"
  }, {
    "p": "monkies",
    "s": "monkey"
  }, {
    "p": "donkies",
    "s": "donkey"
  }, {
    "p": "mysteries",
    "s": "mystery"
  }, {
    "p": "authors",
    "s": "author"
  }];

  // Table A.1
  var irregularNouns = {
    "beef": {
      anglicized: "beefs",
      classical: "beeves"
    },
    "brother": {
      anglicized: "brothers",
      classical: "brethren"
    },
    "child": {
      anglicized: null,
      classical: "children"
    },
    "cow": {
      anglicized: null,
      classical: "kine"
    },
    "ephemeris": {
      anglicized: null,
      classical: "ephemerides"
    },
    "genie": {
      anglicized: null,
      classical: "genii"
    },
    "money": {
      anglicized: "moneys",
      classical: "monies"
    },
    "mongoose": {
      anglicized: "mongooses",
      classical: null
    },
    "mythos": {
      anglicized: null,
      classical: "mythoi"
    },
    "octopus": {
      anglicized: "octopuses",
      classical: "octopodes"
    },
    "ox": {
      anglicized: null,
      classical: "oxen"
    },
    "soliloquy": {
      anglicized: "soliloquies",
      classical: null
    },
    "trilby": {
      anglicized: "trilbys",
      classical: null
    }
  };

  var uninflectedSuffixes = ["fish", "ois", "sheep", "deer", "pox", "itis"];

  // Table A.2
  var uninflectedNouns = {
    "bison": 1,
    "flounder": 1,
    "pliers": 1,
    "bream": 1,
    "gallows": 1,
    "proceedings": 1,
    "breeches": 1,
    "graffiti": 1,
    "rabies": 1,
    "britches": 1,
    "headquarters": 1,
    "salmon": 1,
    "carp": 1,
    "herpes": 1,
    "scissors": 1,
    "chassis": 1,
    "high-jinks": 1,
    "sea-bass": 1,
    "seabass": 1,
    "clippers": 1,
    "homework": 1,
    "series": 1,
    "cod": 1,
    "innings": 1,
    "shears": 1,
    "contretemps": 1,
    "jackanapes": 1,
    "species": 1,
    "corps": 1,
    "mackerel": 1,
    "swine": 1,
    "debris": 1,
    "measles": 1,
    "trout": 1,
    "diabetes": 1,
    "mews": 1,
    "tuna": 1,
    "djinn": 1,
    "mumps": 1,
    "whiting": 1,
    "eland": 1,
    "news": 1,
    "wildebeest": 1,
    "elk": 1,
    "pincers": 1,

    "moose": 1,
    "shrimp": 1,
    "hoi polloi": 1,
    "riffraff": 1,
    "rabble": 1
  };
  var inflectionCategories = [{ // Table A.10
    from: "a",
    to: "ae",
    words: ["alumna", "alga", "vertebra"]
  }, {
    // Table A.11
    from: "a",
    anglicized: "as",
    classical: "ae",
    words: ["abscissa", "amoeba", "antenna", "aurora", "formula", "hydra", "hyperbola", "lacuna", "medusa", "nebula", "nova", "parabola"]
  }, {
    // Table A.12
    from: "a",
    anglicized: "as",
    classical: "ata",
    words: ["anathema", "bema", "carcinoma", "charisma", "diploma", "dogma", "drama", "edema", "enema", "enigma", "gumma", "lemma", "lymphoma", "magma", "melisma", "miasma", "oedema", "sarcoma", "schema", "soma", "stigma", "stoma", "trauma"]
  }, {
    // Table A.13
    from: "en",
    anglicized: "ens",
    classical: "ina",
    words: ["stamen", "foramen", "lumen"]
  }, {
    // Table A.14
    from: "ex",
    to: "ices",
    words: ["codex", "murex", "silex"]
  }, {
    // Table A.15
    from: "ex",
    anglicized: "exes",
    classical: "ices",
    words: ["apex", "cortex", "index", "latex", "pontifex", "simplex", "vertex", "vortex"]
  }, {
    // Table A.16
    from: "is",
    anglicized: "ises",
    classical: "ides",
    words: ["iris", "clitoris"]
  }, {
    // Table A.17
    from: "o",
    to: "os",
    words: ["albino", "archipelago", "armadillo", "commando", "ditto", "dynamo", "embryo", "fiasco", "generalissimo", "ghetto", "guano", "inferno", "jumbo", "lingo", "lumbago", "magneto", "manifesto", "medico", "octavo", "photo", "pro", "quarto", "rhino", "stylo"]
  }, {
    // Table A.18
    from: "o",
    anglicized: "os",
    classical: "i",
    words: ["alto", "basso", "canto", "contralto", "crescendo", "solo", "soprano", "tempo"]
  }, {
    // Table A.19
    from: "on",
    to: "a",
    words: ["aphelion", "asyndeton", "criterion", "hyperbaton", "noumenon", "organon", "perihelion", "phenomenon", "prolegomenon"]
  }, {
    // Table A.20
    from: "um",
    to: "a",
    words: ["agendum", "bacterium", "candelabrum", "datum", "desideratum", "erratum", "extremum", "stratum", "ovum"]
  }, {
    // Table A.21
    from: "um",
    anglicized: "ums",
    classical: "a",
    words: ["aquarium", "compendium", "consortium", "cranium", "curriculum", "dictum", "emporium", "enconium", "gymnasium", "honorarium", "interregnum", "lustrum", "maximum", "medium", "memorandum", "millenium", "minimum", "momentum", "optimum", "phylum", "quantum", "rostrum", "spectrum", "speculum", "stadium", "trapezium", "ultimatum", "vacuum", "velum"]
  }, {
    // Table A.22
    from: "us",
    anglicized: "uses",
    classical: "i",
    words: ["focus", "fungus", "genius", "incubus", "nimbus", "nucleolus", "radius", "stylus", "succubus", "torus", "umbilicus", "uterus"]
  }, {
    // Table A.23
    from: "us",
    anglicized: "uses",
    classical: "us",
    words: ["apparatus", "cantus", "coitus", "hiatus", "impetus", "nexus", "plexus", "prospectus", "sinus", "status"]
  }, {
    // Table A.24
    from: "",
    to: "i",
    words: ["afreet", "afrit", "efreet"]
  }, {
    // Table A.25
    from: "",
    to: "im",
    words: ["cherub", "goy", "geraph"]
  }];

  function suffix(text, s) {
    return text.length >= s.length && text.substring(text.length - s.length) == s;
  }

  function capIfCap(s, s2) {
    if(typeof s == "string") {
      var isCap = s2.charAt(0).toLowerCase() != s2.charAt(0);
      return isCap ? (s.charAt(0).toUpperCase() + s.substr(1)) : s;
    } else {
      var a = [];
      for(var i in s) {
        var s3 = s[i];
        a.push(capIfCap(s3, s2));
      }
      return a;
    }
  }

  function inflection(text, from, to) {
    return text.substring(0, text.length - from.length) + to;
  }

  function isOneOf(c, chars) {
    return chars.indexOf(c) >= 0;
  }

  function isVowel(c) {
    return isOneOf(c, "aeiou");
  }
  var text2 = text.toLowerCase();
  for(var o in userDefinedNouns) {
    if(userDefinedNouns[o].p == text) {
      return userDefinedNouns[o].s;
    }
  }
  for(var singular in irregularNouns) {
    var entry = irregularNouns[singular];
    if(entry.anglicized === text2 || entry.classical === text2) {
      return capIfCap(singular, text);
    }
  }
  for(var s in uninflectedSuffixes) {
    if(suffix(text2, s)) {
      return text;
    }
  }
  if(uninflectedNouns && uninflectedNouns[text2]) {
    return text;
  }
  var checkWords = function(from, to, words) {
      if(suffix(text, to)) {
        var prefix = text.substring(text.length - to.length);
        var text3 = prefix + entry.from;
        for(var word in words) {
          if(text3 === word) {
            return capIfCap(text3, text);
          }
        }
      }
      return null;
    }
  for(var e in inflectionCategories) {
    var entry = inflectionCategories[e];
    var text3 = ("to" in entry && checkWords(entry.from, entry.to, entry.words)) || ("anglicized" in entry && checkWords(entry.from, entry.anglicized, entry.words)) || ("classical" in entry && checkWords(entry.from, entry.classical, entry.words));

    if(text3 != null && typeof text3 == "string") {
      return text3;
    }
  }
  for(var prep in prepositions) {
    var n = text.indexOf(" " + prep + " ");
    if(n > 0) {
      var prefix = text.substring(0, n);
      var r = singularize(prefix);
      if(r != null) {
        return r + " " + prep + " " + text.substr(n + prep.length + 2);
      } else {
        return null;
      }
    }
    n = text.indexOf("-" + prep + "-");
    if(n > 0) {
      var prefix = text.substring(0, n);
      var r = singularize(prefix);
      if(r != null) {
        return r + "-" + prep + "-" + text.substr(n + prep.length + 2);
      } else {
        return null;
      }
    }
  }
  var j = text.lastIndexOf(" ");
  if(j > 0) {
    var r = singularize(text.substring(j + 1));
    if(r != null) {
      return text.substring(0, j + 1) + r;
    } else {
      return null;
    }
  }
  if(suffix(text, "xes") || suffix(text, "ses")) {
    return text.substring(0, text.length - 2);
  }
  if(suffix(text, "s") && !suffix(text, "ss")) {
    return text.substring(0, text.length - 1);
  }
  return text;
}
//console.log(fns.singularize("george soros"));
//console.log(fns.singularize("mama cass"));


  //by spencer kelly (@spencermountain)
  fns.sentenceparser= function(text) {
    var tmp = text.split(/(\S.+?[.])(?=\s+|$)/g);
    var sentences = [];
    //join acronyms, titles
    for(var i in tmp) {
      if(tmp[i]) {
        tmp[i] = tmp[i].replace(/^\s+|\s+$/g, ''); //trim extra whitespace
        //join common abbreviations + acronyms
        if(tmp[i].match(/(^| )(mr|dr|llb|md|bl|phd|ma|ba|mrs|miss|misses|mister|sir|esq|mstr|jr|sr|st|lit|inc|fl|ex|eg|jan|feb|mar|apr|jun|aug|sept?|oct|nov|dec)\. ?$/i) || tmp[i].match(/[ |\.][a-z]\.?$/i)) {
          tmp[parseInt(i,10) + 1] = tmp[i] + ' ' + tmp[parseInt(i,10) + 1];
        } else {
          sentences.push(tmp[i]);
          tmp[i] = '';
        }
      }
    }
    //cleanup afterwards
    var clean = [];
    for(var i2 in sentences) {
      sentences[i2] = sentences[i2].replace(/^\s+|\s+$/g, ''); //trim extra whitespace
      if(sentences[i2]) {
        clean.push(sentences[i2]);
      }
    }
    return clean;
  }
  //console.log(fns.sentenceparser('Dr. calm is me. lkj'))

  //remove objects with a duplicate field from json
  fns.json_unique= function(x, field) {
    var newArray = [];
    label: for(var i = 0; i < x.length; i++) {
      for(var j = 0; j < newArray.length; j++) {
        if(newArray[j] && x[i] && newArray[j][field] == x[i][field]) continue label;
      }
      newArray[newArray.length] = x[i];
    }
    return newArray;
  }




  //handle rate-limited asynchronous freebase calls with a ending callback
  fns.doit_async= function(params) {
    params.q=params.q||[];
    //pack the options in the array
    var packs=params.q.map(function(q,i){
      return {
         q:q,
         options:params.options,
         method:params.method
        }
    });
    var unpack=function(pack, callback){
      pack.method(pack.q, pack.options,function(result){
        callback(null,result)
      })
    }
    async.mapLimit( packs, async_max, unpack, function(err,result){
      return params.callback(result);
    })
  }



  //turn freebase's silly $00 encoding into unicode
  fns.mql_unencode= function(x) {
    x = x.replace(/\$([0-9A-Fa-f]{4})/g, function(a, b) {
      return String.fromCharCode(parseInt(b, 16));
    });
    return x;
  }
  //console.log(fns.mql_unencode("K$00F6ppen_climate_classification"))


  //turn an array into smaller groups of arrays
  fns.groups_of= function(arr, group_length) {
    var all = []
    for(var i in arr) {
      if(i % group_length === 0) {
        all.push([arr[i]])
      } else {
        all[all.length - 1].push(arr[i])
      }
    }
    return all
  }

  fns.parseurl= function(str) {
    var o = {
      strictMode: false,
      key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
      q: {
        name: "queryKey",
        parser: /(?:^|&)([^&=]*)=?([^&]*)/g
      },
      parser: {
        strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
        loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
      }
    },
    m = o.parser[o.strictMode ? "strict" : "loose"].exec(str),
    uri = {},
    i = 14;
    while(i--) uri[o.key[i]] = m[i] || "";
    uri[o.q.name] = {};
    uri[o.key[12]].replace(o.q.parser, function($0, $1, $2) {
      if($1) uri[o.q.name][$1] = $2;
    });
    return uri;
  }

  //turn options object into get paramaters
  fns.set_params= function(o) {
    var options=o;
    if(!options) {
      return ''
    }
    return Object.keys(options).map(function(v) {
      var val=options[v];
      if(_.isArray(options[v]) || _.isObject(options[v])) {
        val = encodeURIComponent(JSON.stringify(options[v]));
      }
      return v + '=' + val
    }).join('&')
  }

  fns.clone=function(q){
    return JSON.parse(JSON.stringify(q))
  }


 fns.http= function(url, options, callback) {
    if(options.key){
      url+='&key='+options.key;
    }
   $.get(url, function(result) {
     callback(result)
   });
  }

fns.post=function(query,options,callback){
  var body=JSON.stringify({query:query, key:options.key, cursor:options.cursor})
  request({
    url: 'http://api.freebase.com/api/service/mqlread',
    method: 'POST',
      body: 'query='+body
  }, function (err, res, body) {
      try {
        return callback(JSON.parse(body));
      } catch(e) {
        return callback({
          body:body,
          error: e,
          url:url
        })
      }
    });
}
//fns.post([{"id":"/en/radiohead","name":null}],{},console.log)

  fns.isin= function(word, arr) {
    return arr.some(function(v) {
      return v == word
    })
  }


   var globals={
  host:'https://www.googleapis.com/freebase/v1/',
  image_host:"https://usercontent.googleapis.com/freebase/v1/image",
  geosearch:'http://api.freebase.com/api/service/geosearch',
  wikipedia_host:'http://en.wikipedia.org/w/api.php',
  generic_query:{id:null, name:null, mid:null, type:[]}
}
var freebase={};

freebase.mqlread=function(query, options, callback){
  this.doc="interface to freebase's mql api";
  this.reference="http://wiki.freebase.com/wiki/MQL";
  callback=callback||console.log;
  if(!query){return callback({})}
  if(typeof options=="function"){callback=options;options={};}//flexible parameter
  options=options||{};
  options.uniqueness_failure=options.uniqueness_failure||"soft";
  options.cursor=options.cursor||true;
  fns.post(query, options, function(result){
    return callback(result)
  })
}
//freebase.mqlread([{id:"/en/radiohead",name:null}])

freebase.lookup_id=function(q, options, callback){
  this.doc="generic info for an id";
  var ps=fns.settle_params(arguments, freebase.lookup, {type:"/common/topic"});
  if(ps.array){return fns.doit_async(ps);}
  if(!ps.valid){return ps.callback({});}
  var query=fns.clone(globals.generic_query);
  query.id=ps.q;
  freebase.mqlread([query],options,function(r){
    r=r.result||[]
    return ps.callback(r[0]||{})
  })
}
//freebase.lookup_id('/en/radiohead')
// freebase.lookup_id('/m/07jnt')

freebase.search=function(q, options, callback){
    this.doc="regular search api";
    this.reference="http://wiki.freebase.com/wiki/ApiSearch";
    var ps=fns.settle_params(arguments, freebase.search, {});
    if(ps.array){return fns.doit_async(ps);}
    if(!ps.valid){return ps.callback({});}
    if(ps.is_id){return freebase.lookup_id(ps.q,ps.options,ps.callback);}
    //if its a url
    if(ps.url){
        return freebase.url_lookup(ps.q, ps.options, function(result){
          if(result && result.result && result.result[0]){
            return ps.callback(result.result[0]);
          }
          return ps.callback({})
        })
      }
    //if its an id
    if(ps.is_id){
        ps.options.limit=1;
        return freebase.lookup_id(ps.q, ps.options, ps.callback)
      }
    ps.options.query=encodeURIComponent(ps.q);
    var params=fns.set_params(ps.options)
    var url= globals.host+'search/?'+params;
    if(ps.options.type=="/type/type" || ps.options.type=="/type/property"){
      url+="&scoring=schema&stemmed=true"
    }
    fns.http(url, {}, function(result){
      if(!result || !result.result || !result.result[0] ){return ps.callback([])}
      ps.callback(result.result)
  })
}
//freebase.search("bill murray")
// freebase.search("/m/01sh40")
//freebase.search("/en/radiohead")

//*************
//slightly different lookup when its a url
freebase.url_lookup=function(q, options, callback){
  this.doc="freebase search tuned for looking up a url";
  this.reference="http://wiki.freebase.com/wiki/ApiSearch"
  var ps=fns.settle_params(arguments, freebase.url_lookup, {type:"/common/topic", strict:true});
  if(ps.array){return fns.doit_async(ps);}
  if(!ps.valid){return ps.callback({});}
  var output=fns.clone(globals.generic_query);
  var url= globals.host+'search?type=/common/topic&limit=1&query='+encodeURIComponent(ps.q);
  url+="&mql_output="+encodeURIComponent(JSON.stringify(output));
  fns.http(url, ps.options, function(result){
    if(!result||!result.result){return ps.callback({})}
    var r=result.result||[]
    return ps.callback(r[0])
  })
}
// freebase.url_lookup("http://myspace.com/u2")


freebase.lookup=function(q, options, callback){
  this.doc="freebase search with filters to ensure only a confident, unambiguous result";
  this.reference="http://wiki.freebase.com/wiki/ApiSearch"
  var ps=fns.settle_params(arguments, freebase.lookup, {type:"/common/topic", strict:true});
  if(ps.array){return fns.doit_async(ps);}
  if(!ps.valid){return ps.callback({});}
  //if its a url
  if(ps.url){
      return freebase.url_lookup(ps.q, ps.options, ps.callback)
    }
  //if its an id
  if(ps.is_id){
      ps.options.limit=1;
      return freebase.lookup_id(ps.q, ps.options, ps.callback)
    }
  //craft the url
  var strength=ps.options.strength||"full";
  if(!ps.options.strict){
    strength="word"
  }
  var url= globals.host+'search?limit=2&lang=en&type='+ps.options.type+'&filter=';
  var output=fns.clone(globals.generic_query);
  url+=encodeURIComponent('(any name{'+strength+'}:"'+ps.q+'" alias{'+strength+'}:"'+ps.q+'")');
  if(ps.options.type=="/type/type" || ps.options.type=="/type/property"){
    url+="&scoring=schema&stemmed=true"
  }
  url+="&mql_output="+encodeURIComponent(JSON.stringify(output));
  return fns.http(url, ps.options, function(result){
    if(!result || !result.result || !result.result[0] ){return ps.callback({})}
    //filter-out shit results
    result=result.result||[]
    result[0]=result[0]||{}
    result[1]=result[1]||{}
    //kill low-relevance
    if( !result[0].score && result[0].score<30){
      return ps.callback({})
    }
    if(ps.options.strict){
      //kill if 2nd result is also notable
      if(((result[0].score||0) * 0.7) < (result[1].score||0) ){
        return ps.callback({})
      }
    }
    //kill if types are crap
    if(result[1] && result[0].notable && fns.isin( result[0].notable.id, data.kill)){
      return ps.callback({})
    }
    result[0].name= result[0].name||result[0].text||'';
    return ps.callback(result[0])
  })
}
 // freebase.lookup(["/en/radiohead", "http://myspace.com/u2"])
// freebase.lookup("/m/01sh40")
//freebase.search("/en/radiohead")
 //freebase.lookup("pulp fiction")






freebase.get_id=function(q, options, callback){
  this.doc="like freebase.lookup but satisfied with an id"
  this.reference="http://wiki.freebase.com/wiki/ApiSearch"
  var ps=fns.settle_params(arguments, freebase.get_id, {type:"/common/topic"});
  if(ps.array){return fns.doit_async(ps);}
  if(!ps.valid){return ps.callback({});}
  //is an id
  if(!ps.q || (ps.q.match(/\/.{1,32}\/.{3}/) !=null)){return ps.callback({id:ps.q})}
  //is a normal search
  freebase.lookup(ps.q, ps.options, function(result){
    if(!result){return ps.callback({})}
    if(ps.options.type=="/type/type"){
      result.mid=result.id;
      return ps.callback(result)
    }
    if(result.mid){
      result.id=result.id || result.mid;
      return ps.callback(result)
    }
    return ps.callback({})
  })
}
//freebase.get_id("/en/radiohead")

freebase.topic=function(q, options, callback){
    this.doc="topic api"
    this.reference="http://wiki.freebase.com/wiki/Topic_API"
    var ps=fns.settle_params(arguments, freebase.topic, {});
    if(ps.array){return fns.doit_async(ps);}
    if(!ps.valid){return ps.callback({});}
    freebase.get_id(ps.q, ps.options, function(topic){
      var id=topic.id;
      if(!id){return ps.callback({})}
      ps.options.filter=ps.options.filter||'all'
      var url= globals.host+'topic'+id+'?'+fns.set_params(ps.options)
      fns.http(url, ps.options, function(result){
        return ps.callback(result)
      })
    })
}
// freebase.topic("toronto", {filter:"allproperties"})



freebase.paginate=function(query, options, callback){
  this.doc="get all of the results to your query";
  this.reference="http://wiki.freebase.com/wiki/MQL";
  if(typeof options=="function"){callback=options;options={};}//flexible parameter
  options=options||{}
  callback=callback||console.log
  options.max=options.max||2000;
  var all=[];
  //recursive mqlread until cursor is false, or maximum reached
  var iterate=function(cursor){
    options.cursor=cursor
    freebase.mqlread(query, options, function(result){
      if(!result||!result.result){return callback(all);}
      all=all.concat(result.result);
      if(result.cursor && (!options.max || all.length<options.max) ){
        iterate(result.cursor)
      }else{
        return callback(all)
      }
    })
  }
  iterate('')
}
// freebase.paginate([{"type":"/astronomy/moon","name":null, limit:1}],{max:10})

freebase.description=function(q, options, callback){
  this.doc="get a text blurb from freebase";
  this.reference="http://wiki.freebase.com/wiki/ApiText"
  var ps=fns.settle_params(arguments, freebase.description, {});
  if(ps.array){return fns.doit_async(ps);}
  if(!ps.valid){return ps.callback({});}
 freebase.get_id(ps.q, ps.options, function(topic){
  if(!topic || !topic.id){return ps.callback("")}
  var url= globals.host+'text/'+topic.id;
  fns.http(url, ps.options,function(result){
    if(!result.result){return ps.callback('')}
    return ps.callback(result.result)
  })
 });
}


freebase.image=function(q, options, callback){
  this.doc="get a url for image href of on this topic"
  this.reference="http://wiki.freebase.com/wiki/ApiImage"
  var ps=fns.settle_params(arguments, freebase.image, {maxheight:250, maxwidth:250, errorid:"/m/0djw4wd"});
  if(ps.array){return fns.doit_async(ps);}
  if(!ps.valid){return ps.callback({});}
  freebase.get_id(ps.q, ps.options, function(topic){
     if(!topic || !topic.id){return ps.callback("")}
     var query=[{
        "id":   topic.id,
        "name": null,
        "/common/topic/image": [{
          "id":     null
        }]
      }]
    freebase.mqlread(query, ps.options, function(result){
      if(!result || !result.result || !result.result[0] || !result.result[0]["/common/topic/image"][0] ){
        return ps.callback('');
      }
      var url= globals.image_host+result.result[0]["/common/topic/image"][0].id;
      var params=fns.set_params(ps.options);
      url+='?'+params;
      return ps.callback(url)
    })
  })
}
//freebase.image('radiohead',{type:"/music/artist"})

freebase.grammar=function(q, options, callback){
  this.doc="get the proper pronoun to use for a topic eg. he/she/they/it"
  var ps=fns.settle_params(arguments, freebase.grammar, {});
  if(ps.array){return fns.doit_async(ps);}
  if(!ps.valid){return ps.callback({});}
  freebase.get_id(ps.q, ps.options, function(topic){
     if(!topic || !topic.id){return ps.callback({})}
     var query=[{
        "id":   topic.id,
        "name": null,
        "type": [],
        "/people/person/gender": [{
          "id":       null,
          "optional": true
        }],
        "/fictional_universe/fictional_character/gender": [{
          "id":       null,
          "optional": true
        }]
      }]
    freebase.mqlread(query, options, function(result){
      if(!result || !result.result || !result.result[0]){return ps.callback({})}
      result=result.result[0];
      var grammar={
        plural:false,
        gender:null,
        article:"a",
        pronoun:"it",
        copula:"is"
      }
      //people grammar
      if(fns.isin('/people/person', result.type) || fns.isin('/fictional_universe/fictional_character', result.type) ){
        var gender = result["/people/person/gender"][0] || result["/fictional_universe/fictional_character/gender"][0];
        if(gender) {
          if(gender.id == "/en/male") { //male
            grammar.gender = "male";
            grammar.pronoun = "he";
          } else if(gender.id == "/en/female") { //female
            grammar.gender = "female";
            grammar.pronoun = "she";
          }
        } else { //no gender person
          grammar.gender = "unknown";
          grammar.pronoun = "they";
        }
      }else{ //not a person
        //plural topics
        if(_.intersection(data.plural_types, result.type).length >0){
          grammar.plural=true;
          grammar.pronoun="they";
          grammar.copula="are"
        }
        //categories that need a 'the' instead of 'a'
        if(_.intersection(data.definate_articles, result.type).length >0){
          grammar.article="the";
        }
      }
      return ps.callback(grammar);
    })
  })
}
//freebase.grammar("toronto maple leafs")

freebase.same_as_links=function(q, options, callback){
  this.doc="turns a url into a freebase topic and list its same:as links"
  var ps=fns.settle_params(arguments, freebase.same_as_links, {});
  if(ps.array){return fns.doit_async(ps);}
  if(!ps.valid){return ps.callback({});}

  var url= globals.host+'search?type=/common/topic&limit=1&query='+encodeURIComponent(ps.q);
  fns.http(url, ps.options, function(result){
    if(!result || !result.result || !result.result[0]){
      return ps.callback({})
    }
      //get its formatted links from the topic api
    freebase.topic(result.result[0].mid , ps.options, function(all){
      if(_.isEmpty(all)){return ps.callback([]);}
      var links=[];
      //same-as ones
      if(all.property['/common/topic/topic_equivalent_webpage']){
       links=all.property['/common/topic/topic_equivalent_webpage'].values.map(function(v){
          return {href:v.value, title: fns.parseurl(v.value).authority}
        })
      }
      //webpage ones
      if(all.property['/common/topic/topical_webpage']){
       links=links.concat(all.property['/common/topic/topical_webpage'].values.map(function(v){
          var host= fns.parseurl(v.value).authority || ''
          return {href:v.value, title:host.replace(/^www\./,'')}
        }))
      }
      var obj={topic:result.result[0], links:links}
      return ps.callback(obj)
    })
  })
}


freebase.translate=function(q, options, callback){
  this.doc="return specific language title for a topic"
  this.reference="http://wiki.freebase.com/wiki/I18n"
  var ps=fns.settle_params(arguments, freebase.translate, {lang:"/lang/fr"});
  if(ps.array){return fns.doit_async(ps);}
  if(!ps.valid){return ps.callback({});}
  if(!ps.options.lang.match(/\/lang\//)){
    ps.options.lang='/lang/'+ps.options.lang
  }
    freebase.get_id(ps.q, ps.options, function(topic){
    if(!topic||!topic.id){return ps.callback("")}
    var query=[{
      "id": topic.id,
      "name": [{
        "lang":  ps.options.lang,
        "value": null
      }]
    }]
    freebase.mqlread(query, {}, function(result){
      if(!result || !result.result || !result.result[0]){return ps.callback('')}
      var name=result.result[0].name||[{}]
      name=name[0].value||'';
      return ps.callback(name)
    })
  })
}


freebase.notable=function(q, options, callback){
  this.doc="get a topic's notable type"
  var ps=fns.settle_params(arguments, freebase.notable, {});
  if(ps.array){return fns.doit_async(ps);}
  if(!ps.valid){return ps.callback({});}

 freebase.topic(ps.q, {filter:"/common/topic/notable_types"}, function(result){
  if(!result || !result.property || !result.property['/common/topic/notable_types']){return ps.callback({})}
  var notable=result.property['/common/topic/notable_types'] || {values:[]};
  notable.values[0].name=notable.values[0].text;
  return ps.callback(notable.values[0])
 });
}

freebase.sentence=function(q, options, callback){
  this.doc="get the first sentence of a topic description"
  this.reference="http://wiki.freebase.com/wiki/APIText"
  var ps=fns.settle_params(arguments, freebase.sentence, {});
  if(ps.array){return fns.doit_async(ps);}
  if(!ps.valid){return ps.callback({});}

  freebase.description(ps.q, ps.options, function(desc){
    if(!desc){return ps.callback("")}
    desc=fns.sentenceparser(desc)||[]
    desc=desc[0]||''
    desc=desc.replace(/\(.*?\)/g,'')//remove birthdates
    desc=desc.replace(/  /g,' ')
    return ps.callback(desc)
  })
}
//freebase.sentence(['radiohead','john malkovich'],{},console.log)

freebase.list=function(q, options, callback){
  this.doc="get a list of topics in a type"
  var ps=fns.settle_params(arguments, freebase.list, {limit:2000});
  if(ps.array){return fns.doit_async(ps);}
  if(!ps.valid){return ps.callback([]);}
  //singularize it if its not an id
  if(!ps.q.match(/\/.{1,12}\/.{3}/)){
    ps.q=fns.singularize(ps.q);
  }
  //get its id
  freebase.get_id(ps.q, {type:"/type/type"}, function(topic){
    if(!topic || !topic.id){return ps.callback([])}
      var query = [{
        "type": topic.id,
        "name": null,
        "id": null,
        "mid": null,
        "limit": 100
      }]
      if(ps.options.extend){
        for(var i in ps.options.extend){
          query[0][i]=ps.options.extend[i]
        }
      }
      freebase.paginate(query, ps.options, ps.callback)
   })
}
//freebase.list("hurricanes",{}, function(r){console.log(r)})


freebase.place_data = function(geo, options, callback) {
  this.doc="from a geo-coordinate, get the town, province, country, and timezone for it"
  callback = callback || console.log;
  if(!geo) {
    return callback({})
  }
  options = options || {};
  //handle an array
  if(_.isArray(geo) && geo.length > 1) {
    return fns.doit_async(geo, freebase.place_data, options, callback)
  }
  var location = {"coordinates":[ geo.lng , geo.lat ],"type":"Point"}
  var out = [{
    "mid": null,
    "name": null,
    "type": []
  }]
  var url = globals.geosearch + '?location=' + encodeURIComponent(JSON.stringify(location)) + '&order_by=distance&limit=1&type=/location/citytown&within=15&format=json&mql_output=' + encodeURIComponent(JSON.stringify(out))
  fns.http(url, options, function(r) {
    var all = {
      city: null,
      country: null,
      province: null,
      timezone: null
    }
    all.city = r.result.features[0].properties;
    var query = [{
      "name": null,
      "id": r.result.features[0].properties.mid,
      "/location/location/containedby": [{
        "id": null,
        "name": null,
        "type": [],
        "optional": true,
        "/location/location/time_zones": [{
          "/time/time_zone/offset_from_uct": null,
          "id": null,
          "name": null,
          "optional": true
        }],
        "/location/location/containedby": [{
          "id": null,
          "name": null,
          "type": [],
          "optional": true,
          "/location/location/time_zones": [{
            "/time/time_zone/offset_from_uct": null,
            "id": null,
            "name": null,
            "optional": true
          }]
        }]
      }]
    }]
    freebase.mqlread(query, {}, function(r) {
      //hunt for the most appropriate topics in 2 layers
      for(var i in r.result[0]['/location/location/containedby']){
        var v=r.result[0]['/location/location/containedby'][i]
        if(v.type.filter(function(t) {return t == "/location/country"})[0]) {
          all.country = {
            id: v.id,
            name: v.name
          }
        } else if(v.type.filter(function(t) {return t == "/location/administrative_division"})[0]) {
          all.province = {
            id: v.id,
            name: v.name
          }
        }
        if(v["/location/location/time_zones"][0] && v["/location/location/time_zones"].length==1) {
          all.timezone = v["/location/location/time_zones"][0];
        }
        if(all.country) {
          return callback(all)
        }
        //second layer looks good too
        v['/location/location/containedby'].map(function(o) {
          if(o.type.filter(function(t) {return t == "/location/country"})[0]) {
            all.country = {
              id: o.id,
              name: o.name
            }
          } else if(!all.province && o.type.filter(function(t) { return t == "/location/administrative_division"})[0]) {
            all.province = {
              id: o.id,
              name: o.name
            }
          }
          if(!all.timezone && o["/location/location/time_zones"][0] && o["/location/location/time_zones"].length==1) {
            all.timezone = o["/location/location/time_zones"][0];
          }
        })
      }
      return callback(all)
    })

  })
}
//  freebase.place_data({lat:51.545414293637286,lng:-0.07589578628540039}, {}, console.log)


freebase.incoming=function(q, options, callback){
  this.doc="get any incoming data to this topic, ignoring cvt types"
  var ps=fns.settle_params(arguments, freebase.incoming, {});
  if(ps.array){return fns.doit_async(ps);}
  if(!ps.valid){return ps.callback({});}

  freebase.get_id(ps.q, ps.options, function(topic){
    if(!topic || !topic.id){return ps.callback([])}
    var query=[{
      "id": topic.id,
      "/type/reflect/any_reverse": [{
        "link": null,
        "id":   null,
        "name": null,
        "type": "/common/topic",
        "limit":170
      }]
    }]
    //this technically doesn't paginate.
    freebase.paginate(query, ps.options, function(result){
      if(!result || !result[0] || !result[0]['/type/reflect/any_reverse']){
        return ps.callback([])
      }
      return ps.callback(result[0]['/type/reflect/any_reverse'])
    })
  })
}

freebase.outgoing=function(q, options, callback){
  this.doc="return all outgoing links for a topic, traversing cvt types"
  var ps=fns.settle_params(arguments, freebase.outgoing, {});
  if(ps.array){return fns.doit_async(ps);}
  if(!ps.valid){return ps.callback({});}

  freebase.lookup(ps.q, ps.options, function(topic){
    if(!topic || !topic.mid){return ps.callback([])}
      freebase.topic(topic.mid, ps.options, function(result){
        if(_.isEmpty(result)){return ps.callback([]);}
        var out=[];
          //get rid of permissions and stuff..
        result.property=fns.kill_boring(result.property)
        Object.keys(result.property).forEach(function(key){
          var v=result.property[key];
          //add topics
          if(v.valuetype=="object"){
            v.values=v.values.map(function(s){s.property=key; return s})
            out=out.concat(v.values)
          }
          //add the topics from cvt values in the same manner
          if(v.valuetype=="compound"){
            v.values.forEach(function(c){
              c.property=fns.kill_boring(c.property);
              Object.keys(c.property).forEach(function(key2){
               if(c.property[key2].valuetype=="object"){
                c.property[key2].values=c.property[key2].values.map(function(s){s.property=[key,key2]; return s})
                out=out.concat(c.property[key2].values)
               }
              })
            })
          }
        })
        out=out.map(function(o){return {name:o.text, id:o.id, property:o.property }})
        //add sentence-forms
        out=out.map(function(o){
          var property=o.property ||'';
          if(_.isArray(o.property)){
            property=o.property.join('');
          }
          o.sentence=topic.name +"'s " +_.last(property.split('/')).replace('_',' ') +" is "+ o.name; //ugly fallback
          var grammar=data.sentence_grammars.filter(function(v){return v.id==property})[0]||{}
          if(grammar["sen"] && topic.name && o.name){
            o.sentence=grammar["sen"].replace(/\bsubj\b/, topic.name).replace(/\bobj\b/, o.name);
          }
          return o
        })
        return ps.callback(out)
      })
    })
}
//freebase.outgoing("vancouver")

freebase.graph=function(q, options, callback){
  this.doc="return all outgoing and incoming links for a topic"
  var ps=fns.settle_params(arguments, freebase.graph, {});
  if(ps.array){return fns.doit_async(ps);}
  if(!ps.valid){return ps.callback({});}
  freebase.lookup(ps.q, ps.options, function(topic){
      if(!topic){return ps.callback({})}
      delete topic.score;
      delete topic.lang;
      ps.options.filter="allproperties";
      freebase.topic(topic.mid, ps.options, function(r){
        if(!r ||!r.property){return ps.callback([])}
        var incoming={};var outgoing ={};
        Object.keys(r.property).forEach(function(k){
          if(k.match(/^\!/)){
            outgoing[k]=r.property[k]
          }else{
            incoming[k]=r.property[k]
          }
        })
        incoming=fns.parse_topic_api(incoming);
        outgoing=fns.parse_topic_api(outgoing);
        var out=incoming.map(function(v){
          return {subject:topic, property:{id:v.property}, object:v, direction:"outgoing"}
        })
        out=out.concat(outgoing.map(function(v){
          return {object:topic, property:{id:v.property}, subject:v, direction:"incoming"}
        }))
        //add the sentences
        out=out.map(function(obj){
          obj.property.id=obj.property.id.replace(/^\!/,'');
          delete obj.subject.property;
          var grammar=data.sentence_grammars.filter(function(v){return v.id==obj.property.id})[0]||{}
          obj.sentence=obj.subject.name +"'s " +_.last(obj.property.id.split('/')).replace('_',' ') +" is "+ obj.object.name;
          if(grammar["sen"] && obj.subject.name && obj.object.name){
            obj.sentence=grammar["sen"].replace(/\bsubj\b/, obj.subject.name).replace(/\bobj\b/, obj.object.name);
         }
          return obj
        })
        return ps.callback(out)
      })
  })
}
//freebase.graph("toronto")
// freebase.graph("/m/07jnt")
//freebase.graph("shawshank redemption")

freebase.related=function(q, options, callback){
  this.doc="get similar topics to a topic"
  var ps=fns.settle_params(arguments, freebase.related, {});
  if(ps.array){return fns.doit_async(ps);}
  if(!ps.valid){return ps.callback({});}
  var all=[];
  //pluck relevant connected topics from outgoing links
  freebase.outgoing(ps.q, ps.options, function(result){
    all=result.filter(function(v){
      return fns.isin(v.property, data.related_properties)
    })
    //randomize the results
    all=all.sort(function(a,b){return (Math.round(Math.random())-0.5);})
    all=all.map(function(v){
      if(!v.sentence){
        v.sentence=v.name +" is related to "+result.name
      }
      return v
    })
    all=fns.json_unique(all, "id")
    if(all.length >= options.max){
      return ps.callback(all)
    }
    //else, append topics that share the notable type
    freebase.notable(ps.q, ps.options, function(result){
      if(result && result.id){
        return freebase.list(result.id, {max:ps.options.max}, function(r){
          if(!r||_.isEmpty(r)){return ps.callback(all)}
          r=r.map(function(v){
            v.sentence=v.name + " is also a " +result.name;
            return v
          })
          all=all.concat(r);//todo
          all=fns.json_unique(all, "id")
          all=all.sort(function(a,b){return (Math.round(Math.random())-0.5);})
          return ps.callback(all)
        })
      }else{
        return ps.callback(all)
      }
    })
  })
}
/*freebase.related("toronto", {}, function(r){
  console.log(JSON.stringify(r, null, 2));
})*/

freebase.is_a=function(q, options, callback){
  this.doc="get a list of identifiers for a topic"
 var ps=fns.settle_params(arguments, freebase.related, {max:25});
  if(ps.array){return fns.doit_async(ps);}
  if(!ps.valid){return ps.callback({});}
  freebase.topic(ps.q, ps.options, function(r){
    if(_.isEmpty(r)){return ps.callback({});}
    var types=r.property["/type/object/type"] || {}
    types=types.values || []
    types=types.filter(function(v){return !v.text.match(/Topic/)})
    types=types.map(function(v){
      return {name:v.text, id:v.id, property:"/type/object/type"}
    })
    r=fns.parse_topic_api(r.property)
    r=r.filter(function(v){return fns.isin(v.property, data.is_a)})
    r=r.concat(types)
    return ps.callback(r)
  })
}
//freebase.is_a("toronto")

freebase.property_lookup=function(q, options, callback){
  this.doc="lookup soft property matches, like 'birthday' vs 'date of birth'"
  var ps=fns.settle_params(arguments, freebase.property_lookup, {type:"/type/property"});
  if(ps.array){return fns.doit_async(ps);}
  if(!ps.valid){return ps.callback({});}
  freebase.search(ps.q, ps.options, function(candidate_properties){
      //look up offline for property aliases
    if(!q.match(/\/.*?\/.*?\//)){
      q=q.toLowerCase();
      q=q.replace(/  /,' ');
      q=q.replace(/^\s+|\s+$/, '');
      var property_singular=fns.singularize(q);
      candidate_properties=candidate_properties.concat(data.properties.filter(function(v){
        return v.n==q || v.n==property_singular
      }))
    }
    return ps.callback(candidate_properties)
  })
}
//freebase.property_lookup("albums")


freebase.question=function(q, options, callback){
  this.doc="give a topic and a property, and get a list of results"
  var ps=fns.settle_params(arguments, freebase.question, {max:25});
  if(ps.array){return fns.doit_async(ps);}
  if(!ps.valid||!ps.options.property){return ps.callback({});}
  var property=ps.options.property
  var type=ps.options.property.match(/\/.*?\/.*?\//)

  //straight-up id search
  if(property.match(/^\/.{1,12}\/.{3}/)){
    return freebase.topic(q, {}, function(r){
      if(!r || !r.property || !r.property[property]){return ps.callback([])}
      return ps.callback(r.property[property].values)
    })
  }
  var candidate_metaschema=fns.metaschema_lookup(property);
  if(candidate_metaschema){
    ps.options.filter='(all '+candidate_metaschema+':"'+q+'")'
    freebase.search('', options, function(result){
      return ps.callback(result)
    })
  }else{
    freebase.property_lookup(property, {}, function(candidate_properties){
      if(candidate_properties.length===0){return ps.callback([])}
      ps.options.filter=type;
       //look for these properties in the topic api
      freebase.topic(ps.q, ps.options, function(result){
        if(_.isEmpty(result)){return ps.callback({});}
        var all=[];
        candidate_properties.forEach(function(p){
          if(result.property[p.id]){
           all=all.concat(result.property[p.id].values)
          }
        })
        all=fns.json_unique(all, "id")
        return ps.callback(all)
      })
    })
  }
}
 //freebase.question("keanu reeves", {property:"children"})
 //freebase.question("thom yorke", "produced") //******
 //freebase.question("pulp fiction", {property:"/film/film/initial_release_date"})
//freebase.question("keanu reeves","films") //******


freebase.dig=function(q, options, callback){
  this.doc="transitive query on a specific property, maximum 3-ply"
  var ps=fns.settle_params(arguments, freebase.property_lookup, {max:25});
  if(ps.array){return fns.doit_async(ps);}
  if(!ps.valid){return ps.callback({});}
  var all=[];
  freebase.question(ps.q, ps.options, function(r){
    if(!r || !_.isArray(r) || r.length===0){return ps.callback(all)}
      all=all.concat(r);
      r=r.slice(0, ps.options.max).map(function(v){return v.id})
      return fns.doit_async({
        q:r,
        options:ps.options,
        method:freebase.question,
        callback:function(big){
        if(!big || !_.isArray(big) || big.length===0){return ps.callback(all)}
        all=all.concat(_.flatten(big,'shallow'))
        all=fns.json_unique(all, "id")
        fns.doit_async(r, freebase.question, ps.options, function(big){
          if(!big || !_.isArray(big) || big.length===0){return ps.callback(all)}
          all=all.concat(_.flatten(big,'shallow'))
          all=fns.json_unique(all, "id")
          return ps.callback(all)
        })
      }
    })
  })
}
// freebase.dig('/en/bovid', {property:'/biology/organism_classification/lower_classifications'}, function(r){
//   console.log(r)
// })
// freebase.dig('/en/toronto', {property:'/location/location/contains'}, function(r){
//   console.log(r)
// })

freebase.gallery=function(q, options, callback){
  this.doc="list of topics with images"
  var ps=fns.settle_params(arguments, freebase.gallery, {
    extend:{
      "/common/topic/image": [{
        "id": null,
        "optional": "required"
        }]
       }
     });
  if(ps.array){return fns.doit_async(ps);}
  if(!ps.valid){return ps.callback({});}
  freebase.list(ps.q, ps.options, function(result){
    result=result.map(function(obj){
      obj.href=globals.image_host+_.last(obj["/common/topic/image"]).id;
      obj.thumbnail=globals.image_host+_.last(obj["/common/topic/image"]).id
      +'?mode=fillcropmid&maxwidth=150&maxheight=150&errorid=/m/0djw4wd';
      obj=freebase.add_widget(obj)
      return obj;
    })
    return ps.callback(result)
  })
}
// freebase.gallery('hurricanes') //******


freebase.wordnet=function(q, options, callback){
  this.doc="query wordnet via freebase"
  var ps=fns.settle_params(arguments, freebase.wordnet, {});
  if(ps.array){return fns.doit_async(ps);}
  if(!ps.valid){return ps.callback({});}
  var query=[{
    "id":            null,
    "type":          "/base/wordnet/synset",
    "gloss":         null,
    "syntactic_category": null,
    "sort": [
      "syntactic_category",
      "word.sense_number",
      "a:word.word_number"
    ],
    "word": {
      "sense_number": null,
      "derivationally_related_forms": [{
        "sense":{"name":null, "id":null},
          "optional": true
        }],
        "word": {
          "word": ps.q
        }
      },
      "a:word": [{
        "word_number": null,
        "word": {
          "word": null
        }
      }]
    }]
    if(ps.options.limit){query[0].limit=ps.options.limit;}
    freebase.mqlread(query, ps.options, function(r){
      return ps.callback(r.result)
    })
}


freebase.transitive=function transitive(q, options, callback){
  this.doc="do a transitive-query, like all rivers in canada, using freebase metaschema"
  var ps=fns.settle_params(arguments, freebase.transitive, {});
  if(ps.array){return fns.doit_async(ps);}
  if(!ps.valid){return ps.callback({});}
  freebase.get_id(ps.q, ps.options, function(topic){
    if(!topic || !topic.id){return ps.callback({})}
     var candidate_metaschema=fns.metaschema_lookup(ps.options.property);
      if(candidate_metaschema){
        options.filter='(all '+candidate_metaschema+':"'+topic.id+'")'
        freebase.search('', ps.options, function(result){
          return ps.callback(result)
        })
      }else{
        return ps.callback([])
      }
    })
}
//*******

freebase.geolocation=function(q, options, callback){
 this.doc="lat/long for a topic"
  var ps=fns.settle_params(arguments, freebase.geolocation, {type:"/location/location"});
  if(ps.array){return fns.doit_async(ps);}
  if(!ps.valid){return ps.callback({});}
  freebase.get_id(ps.q, ps.options, function(topic){
    if(!topic || !topic.id){return ps.callback({})}
    var query=[{
      "id":topic.id,
      "name":null,
      "/location/location/geolocation": [{
          "latitude": null,
          "longitude": null,
          "type": "/location/geocode",
          "optional": true
        }]
      }]
     freebase.mqlread(query, ps.options, function(result){
          if(result.result && result.result[0] && result.result[0]['/location/location/geolocation'][0]){
            var geo=result.result[0]['/location/location/geolocation'][0];
            delete geo.type;
            delete geo.optional;
            return ps.callback(geo);
          }
          return ps.callback({})
        })
   })
}
//freebase.geolocation("cn tower")

freebase.nearby=function(q, options, callback){
  this.doc="list of topics nearby a location"
  var ps=fns.settle_params(arguments, freebase.nearby, {});
  if(ps.array){return fns.doit_async(ps);}
  if(!ps.valid){return ps.callback({});}
  freebase.geolocation(ps.q, {}, function(geo){
    if(!geo || !geo.latitude || !geo.longitude){return ps.callback([])}
         //use the *old* freebase api for this, as there's no alternative in the new one
          var location='{"coordinates":['+geo.longitude+','+geo.latitude+'],"type":"Point"}'
          ps.options.within=ps.options.within||5;
          ps.options.type=ps.options.type||"/location/location";
          var url=globals.geosearch+'?location='+encodeURIComponent(location)+'&order_by=distance&type='+ps.options.type+'&within='+ps.options.within+'&limit=200&format=json'
          fns.http(url, ps.options, function(r){
            return ps.callback(r.result.features)
          })
    })
}
//freebase.nearby("cn tower", {type:"/food/restaurant"}, console.log)


freebase.inside=function(q, options, callback){
  this.doc="list of topics inside a location"
  var ps=fns.settle_params(arguments, freebase.inside, {property:"part_of"});
  if(ps.array){return fns.doit_async(ps);}
  if(!ps.valid){return ps.callback({});}
  //handy to have their geocoordinates too
  ps.options.mql_output=ps.options.mql_output || [{
    "name": null,
    "id": null,
    "type":"/location/location",
    "/location/location/geolocation": [{
      "latitude": null,
      "longitude": null,
      "type": "/location/geocode",
      "optional": true
    }]
  }]
  freebase.transitive(ps.q, ps.options, function(r){
    return ps.callback(r)
  })
}
 //freebase.inside("montreal")//***********


freebase.wikipedia_page=function(q, options, callback){
  this.doc="get a url for wikipedia based on this topic"
    var ps=fns.settle_params(arguments, freebase.wikipedia, {});
    if(ps.array){return fns.doit_async(ps);}
    if(!ps.valid){return ps.callback({});}
   freebase.get_id(ps.q, ps.options, function(topic){
     if(!topic || !topic.id){return ps.callback("")}
     var query=[{
        "id":   topic.id,
        "name": null,
        "key": {
          "namespace": "/wikipedia/en_title",
          "value":     null
        }
      }]
    freebase.mqlread(query, ps.options, function(result){
      if(!result || !result.result || !result.result[0]){return ps.callback('')}
      return ps.callback('http://en.wikipedia.org/wiki/'+fns.mql_unencode(result.result[0].key.value))
    })
  })
}
 //freebase.wikipedia_page('toronto')

 freebase.dbpedia_page=function(q, options, callback){
  this.doc="get a url for dbpedia based on this topic"
    var ps=fns.settle_params(arguments, freebase.dbpedia, {});
    if(ps.array){return fns.doit_async(ps);}
    if(!ps.valid){return ps.callback({});}
   freebase.get_id(ps.q, ps.options, function(topic){
     if(!topic || !topic.id){return ps.callback("")}
     var query=[{
        "id":   topic.id,
        "name": null,
        "key": {
          "namespace": "/wikipedia/en_title",
          "value":     null
        }
      }]
    freebase.mqlread(query, ps.options, function(result){
      if(!result || !result.result || !result.result[0]){return ps.callback({})}
      var key=fns.mql_unencode(result.result[0].key.value)
      var obj={
        html:'http://dbpedia.org/page/'+key,
        json:'http://dbpedia.org/data/'+key+'.json',
      }
      return ps.callback(obj)
    })
  })
}
//freebase.dbpedia_page('toronto')

freebase.wikipedia_categories=function(q, options, callback){
  this.doc="get the wikipedia categories for a topic"
  var ps=fns.settle_params(arguments, freebase.wikipedia_categories, {});
  if(ps.array){return fns.doit_async(ps);}
  if(!ps.valid){return ps.callback({});}
  //if its not a wikipedia title, reuse get-topic logic for searches/ids
  if(ps.q.match(/ /) || ps.q.substr(0,1)==ps.q.substr(0,1).toLowerCase() || ps.q.match(/^\//)){
    return freebase.wikipedia_page(ps.q, options, function(r){
      freebase.wikipedia_categories(r, options, ps.callback)
    })
  }
  var url=globals.wikipedia_host+'?action=query&prop=categories&format=json&clshow=!hidden&cllimit=200&titles='+encodeURIComponent(ps.q);
  fns.http(url, ps.options, function(r){
    if(!r || !r.query || !r.query.pages || !r.query.pages[Object.keys(r.query.pages)[0]]){return ps.callback([])}
    var cats=r.query.pages[Object.keys(r.query.pages)[0]].categories ||[]
    cats=cats.map(function(v){return v.title})
    return ps.callback(cats)
  })
}
//freebase.wikipedia_categories(["Thom Yorke","Toronto"], {}, console.log)
//freebase.wikipedia_categories("Thom Yorke", {}, console.log)//****

freebase.wikipedia_links=function(q, options, callback){
  this.doc="outgoing links from this wikipedia page, converted to freebase ids"
  callback=callback||console.log;
  if(!q){return callback({})}
  if(typeof options=="function"){callback=options;options={};}//flexible parameter
  options=options||{};
  //handle an array
  if(_.isArray(q) && q.length>1){
    return fns.doit_async(q, freebase.wikipedia_links, options, callback)
  }
  //if its not a wikipedia title, reuse get-topic logic for searches/ids
  if(q.match(/ /) || q.substr(0,1)==q.substr(0,1).toLowerCase() || q.match(/^\//)){
    return freebase.wikipedia_page(q, options, function(r){
      freebase.wikipedia_links(r, options, callback)
    })
  }
  var url=globals.wikipedia_host+'?action=query&prop=links&format=json&plnamespace=0&pllimit=500&titles='+encodeURIComponent(q);
  fns.http(url, ps.options, function(r){
    if(!r || !r.query || !r.query.pages || !r.query.pages[Object.keys(r.query.pages)[0]]){return callback([])}
    var links=r.query.pages[Object.keys(r.query.pages)[0]].links ||[]
    //filter-out non-freebase topics
    links=links.filter(function(v){return v.title.match(/^List of /i)==null})
    links=links.map(function(o){
      o.id="/wikipedia/en/"+freebase.mql_encode(o.title.replace(/ /g,'_'));
      o.name=o.title;
      delete o.title;
      delete o.ns;
      return o
    })
    return callback(links)
  })
}
//freebase.wikipedia_links("Toronto", {}, console.log)

freebase.wikipedia_external_links=function(q, options, callback){
  this.doc="outgoing links from this wikipedia page, converted to freebase ids"
  callback=callback||console.log;
  if(!q){return callback({})}
  if(typeof options=="function"){callback=options;options={};}//flexible parameter
  options=options||{};
  //handle an array
  if(_.isArray(q) && q.length>1){
    return fns.doit_async(q, freebase.wikipedia_external_links, options, callback)
  }
  //if its not a wikipedia title, reuse get-topic logic for searches/ids
  if(q.match(/ /) || q.substr(0,1)==q.substr(0,1).toLowerCase() || q.match(/^\//)){
    return freebase.wikipedia_page(q, options, function(r){
      freebase.wikipedia_external_links(r, options, callback)
    })
  }
  var url=globals.wikipedia_host+'?action=query&prop=extlinks&format=json&plnamespace=0&pllimit=500&titles='+encodeURIComponent(q);
  fns.http(url, ps.options, function(r){
    if(!r || !r.query || !r.query.pages || !r.query.pages[Object.keys(r.query.pages)[0]]){
      return callback([])
    }
    var links=r.query.pages[Object.keys(r.query.pages)[0]].extlinks ||[]
    links=links.filter(function(v){return v["*"].match(/^http/)})
    links=links.map(function(v){
      var box=fns.parseurl(v["*"]);
      return {url:v["*"], domain:box.host}
    })
    return callback(links)
  })
}
//freebase.wikipedia_external_links("/en/toronto", {}, console.log)


freebase.schema=function(q, options, callback){
  this.doc="common lookups for types and properties"
  callback=callback||console.log;
  if(!q){return callback({})}
  if(typeof options=="function"){callback=options;options={};}//flexible parameter
  options=options||{};
  //handle an array
  if(_.isArray(q) && q.length>1){
    return fns.doit_async(q, freebase.schema, options, callback)
  }
  //see if its a type
  freebase.search(q, {type:"/type/type"}, function(r){
    if(r && r[0] && r[0].id){
     r=r[0]
     var query=[{
        "id": r.id,
        "mid": null,
        "name":null,
        "properties": [{
          "id": null,
          "name": null,
          "/type/property/reverse_property":[{
            "id": null,
            "name": null,
            "optional":true
          }]
        }],
        "/freebase/type_hints/mediator": null,
        "/freebase/type_hints/included_types": [{
          "id": null,
          "name": null
        }],
        "/freebase/type_profile/published":null,
        "/type/type/expected_by": [{
          "id": null,
          "name": null
        }],
        "/freebase/type_profile/instance_count": null,
        "/freebase/type_profile/property_count": null,
        "domain": {
          "id": null,
          "name": null
        },
        "/freebase/type_profile/equivalent_topic": {
          "id": null,
          "name": null
        },
        "type": "/type/type"
      }]
      freebase.mqlread(query, {}, function(r){
        if(!r || !r.result || !r.result[0]){return callback({})}
        r=r.result[0]
        var obj={}
        obj.domain=r.domain
        obj.id=r.id
        obj.included_types=r["/freebase/type_hints/included_types"]
        obj.incoming_properties=r["/type/type/expected_by"]
        obj.is_compound_value=r["/freebase/type_hints/mediator"]||false
        obj.is_commons=r["/freebase/type_profile/published"]||false
        obj.equivalent_topic=r["/freebase/type_profile/equivalent_topic"]
        obj.topic_count=r["/freebase/type_profile/instance_count"]||0
        obj.property_count=r["/freebase/type_profile/property_count"]||0;
        //types that include this one
        var query=[{
          "id": null,
          "name": null,
          "s:name": {
            "value": null,
            "lang": "/lang/en",
            "optional": "required"
          },
          "/freebase/type_hints/included_types": [{
            "id": obj.id
          }]
        }]
        freebase.mqlread(query,{},function(r){
          if(!r || !r.result){return callback(obj)}
          obj.included_by=r.result.map(function(v){return {id:v.id, name:v.name}})
          return callback(obj)
        })
      })

    }
    else{
      freebase.property_lookup(q,{},function(r){
        if(!r || !r[0] || !r[0].id){
          return callback({})
        }
        return freebase.property_inspection(r[0].id, {}, callback)
      })
    }
  })
}
//freebase.schema("politician")
//freebase.schema("/type/property/master_property")


freebase.property_introspection=function(q, options, callback){
  this.doc="common lookups for freebase property data"
  callback=callback||console.log;
  if(!q){return callback({})}
  if(typeof options=="function"){callback=options;options={};}//flexible parameter
  options=options||{};
  //handle an array
  if(_.isArray(q) && q.length>1){
    return fns.doit_async(q, freebase.property_introspection, options, callback)
  }
  var query=[{
      "id": q,
      "mid": null,
      "name": null,
      "type": "/type/property",
      "reverse_property": [{
        "id": null,
        "name": null,
        "optional": true
      }],
      "expected_type": [{
        "id": null,
        "name": null,
        "optional": true,
        "/freebase/type_hints/mediator": null
      }],
      "unique": null,
      "schema": {
        "id":null,
        "name":null,
        "/freebase/type_profile/instance_count": null,
        "/freebase/type_hints/mediator": null
      },
      "/common/topic/description": null
    }]
    freebase.mqlread(query,options,function(r){
      var obj={}
      if(!r || !r.result || !r.result[0]){return callback(obj)}
      r=r.result[0]
      obj.name=r.name
      obj.id=r.id
      obj.type=r.schema
      obj.description=r["/common/topic/description"]
      obj.unique=r.unique||false;
      obj.reverse_property=r.reverse_property
      obj.expected_type=r.expected_type

      //get its metaschema
      var query=[{
        "name": null,
        "type": "/base/fbontology/semantic_predicate",
        "paths": {
          "a:properties": q,
          "b:properties":[{"id":null}]
        }
      }]
      freebase.mqlread(query,options,function(r){
        obj.meta=r.result
        return callback(obj)
      })
    })
  //   //get its property aliases
  // var query=[{type:"/base/natlang/property_alias",
  //   property:property,
  //   alias:[]
  //   }]
}
//freebase.property_introspection("/government/politician/party")


//
freebase.drilldown=function(q, options, callback){
  this.doc="get insight into the breakdown of the topics in this type, by type and quality"
  var ps=fns.settle_params(arguments, freebase.drilldown, {limit:1000});
  if(ps.array){return fns.doit_async(ps);}
  if(!ps.valid){return ps.callback([]);}
  //singularize it if its not an id
  if(!ps.q.match(/\/.{1,12}\/.{3}/)){
    ps.q=fns.singularize(ps.q);
  }
  //get its id
  freebase.get_id(ps.q, {type:"/type/type"}, function(topic){
    if(!topic || !topic.id){return ps.callback([])}
      var query = [{
          "s:type": topic.id,
          "type": [],
          "name": null,
          "id": null,
          "limit": 150,
          "estimate-count":null,
          "/common/topic/image": [{
            "id": null,
            "limit": 1,
            "optional": true
          }],
          "key": [{
            "namespace": "/wikipedia/en",
            "limit": 1,
            "value": null,
            "optional": true
          }],
          "/common/topic/alias": [{
            "value": null,
            "limit": 1,
            "optional": true
          }]
        }]
      if(options.extend){
        for(var i in options.extend){
          query[0][i]=options.extend[i]
        }
      }
      freebase.paginate(query, ps.options, function(result){
        var types=_.flatten(result.map(function(v){
          return v.type
        }));
        types=types.filter(function(v){return !v.match(/\/topic$/)})
        var topk=fns.topk(types,result.length);
        var aliases=result.filter(function(r){return r["/common/topic/alias"].length>0})
        var images=result.filter(function(r){return r["/common/topic/image"].length>0})
        var wikipedia=result.filter(function(r){return r["key"].length>0})
        var obj={
          types:topk,
          alias_percent:fns.percentage(aliases.length,result.length),
          image_percent:fns.percentage(images.length,result.length),
          wikipedia_percent:fns.percentage(wikipedia.length,result.length),
          subset:result.length,
          "estimate-count":result[0]["estimate-count"]
        }
        ps.callback(obj)
      })
   })
}
// freebase.drilldown("/chemistry/chemical_compound",{max:10000},console.log)


  freebase.mql_encode= function(s) {
    this.doc="quote a unicode string to turn it into a valid mql /type/key/value"
    if(!s) {
      return ''
    }
    s = s.replace(/  /, ' ');
    s = s.replace(/^\s+|\s+$/, '');
    s = s.replace(/ /g, '_');
    var mqlkey_start = 'A-Za-z0-9';
    var mqlkey_char = 'A-Za-z0-9_-';
    var MQLKEY_VALID = new RegExp('^[' + mqlkey_start + '][' + mqlkey_char + ']*$');
    var MQLKEY_CHAR_MUSTQUOTE = new RegExp('([^' + mqlkey_char + '])', 'g');
    if(MQLKEY_VALID.exec(s)) // fastpath
      return s;
    var convert = function(a, b) {
      var hex = b.charCodeAt(0).toString(16).toUpperCase();
      if(hex.length == 2) hex = '00' + hex;
      if(hex.length == 3) hex = '0' + hex;
      return '$' + hex;
    };
    var x = s.replace(MQLKEY_CHAR_MUSTQUOTE, convert);
    if(x.charAt(0) == '-' || x.charAt(0) == '_') {
      x = convert(x, x.charAt(0)) + x.substr(1);
    }
    return x;
  }


freebase.category_list=function(q, options, callback){
  this.doc="get the freebase topics in a wikipedia category"
  var ps=fns.settle_params(arguments, freebase.category_list, {depth:1});
  if(ps.array){return fns.doit_async(ps);}
  if(!ps.valid){return ps.callback({});}
  //if its not a wikipedia category
  if(!ps.q.match(/Category:/)){
    ps.q='Category:'+ps.q
  }
  var all_topics=[];
  var all_categories=[];
  iterate(ps.q,'')
  function iterate(cat,cmcontinue){
  var url = globals.wikipedia_host+"?action=query&list=categorymembers&format=json&cmlimit=400&cmtitle=" + encodeURIComponent(cat)+"&cmcontinue="+cmcontinue;
    fns.http(url, ps.options, function(r){
      if(!r || !r.query || !r.query.categorymembers || !r.query.categorymembers[Object.keys(r.query.categorymembers)[0]]){return ps.callback([])}
      all_categories=all_categories.concat(r.query.categorymembers.filter(function(v){return v.ns==14}));
      var cmcontinue=r["query-continue"]||{}
      cmcontinue=cmcontinue.categorymembers||{}
      cmcontinue=cmcontinue.cmcontinue||'';
      var topics=r.query.categorymembers.filter(function(v){return v.ns==0});
      topics=topics.map(function(v){
          return {
            id: "/wikipedia/en/"+freebase.mql_encode(v.title),
            article:'http://en.wikipedia.org/wiki/index.html?curid='+v.pageid,
            title:v.title
          }
        })
      all_topics=all_topics.concat(topics);
      if(!cmcontinue){
        return ps.callback(all_topics)
      }else{
        iterate(cat,cmcontinue);//recurse
      }
    })
  }
}
// freebase.category_list("Category:Redirects_from_plurals")



freebase.wikipedia_subcategories=function(q, options, callback){
  this.doc="find the subcategories of this wikipedia category"
  var ps=fns.settle_params(arguments, freebase.wikipedia_subcategories, {depth:1, already:[]});
  if(ps.array){return fns.doit_async(ps);}
  if(!ps.valid){return ps.callback({});}
  //if its not a wikipedia category
  if(!ps.q.match(/Category:/)){
    ps.q='Category:'+ps.q
  }
  var url = globals.wikipedia_host+"?action=query&list=categorymembers&format=json&cmlimit=400&cmnamespace=14&cmtitle=" + encodeURIComponent(ps.q);
  fns.http(url, ps.options, function(r){
    if(!r || !r.query || !r.query.categorymembers || !r.query.categorymembers[Object.keys(r.query.categorymembers)[0]]){return ps.callback([]);
    }
    var cats=r.query.categorymembers.map(function(v){return v.title});
    //remove if done already (for recursive cats)
    cats=cats.filter(function(v){return !fns.isin(v, ps.options.already)})
    ps.options.already=fns.compact_strong(_.flatten(ps.options.already.concat(cats)));
    if(ps.options.depth>1 && cats.length>0){
      ps.options.depth=ps.options.depth-1;
      return freebase.wikipedia_subcategories(cats, ps.options, function(r){
        ps.options.already=ps.options.already.concat(r)
        return ps.callback(fns.compact_strong(_.flatten(ps.options.already)));
      })
    }else{
      return ps.callback(ps.options.already)
    }
  })
}
//freebase.wikipedia_subcategories("Category:Enzymes",{depth:20},function(r){console.log(JSON.stringify(r))})
//freebase.wikipedia_subcategories(["Category:Toronto","Category:Vancouver"])


freebase.rdf=function(q, options, callback){
    this.doc="RDF api"
    this.reference="http://wiki.freebase.com/wiki/RDF"
    var ps=fns.settle_params(arguments, freebase.topic, {});
    if(ps.array){return fns.doit_async(ps);}
    if(!ps.valid){return ps.callback({});}
    freebase.get_id(ps.q, ps.options, function(topic){
      var id=topic.id;
      if(!id){return ps.callback({})}
      ps.options.filter=ps.options.filter||'all'
      var url= globals.host+"rdf"+id;
      fns.http(url, ps.options, function(result){
        return ps.callback(result.body||'')
      })
    })
}
//freebase.rdf("toronto")

freebase.wikipedia_to_freebase=function(q, options, callback){
  this.doc="turn a wikipedia title or url into a freebase topic"
  var ps=fns.settle_params(arguments, freebase.wikipedia_to_freebase, {depth:1});
  if(ps.array){return fns.doit_async(ps);}
  if(!ps.valid){return ps.callback({});}
  ps.q=ps.q.replace(/^https?:\/\/..\.wikipedia\.org\/wiki\//,'');
  var title=ps.q;
  var obj={
            id:"/wikipedia/en/"+freebase.mql_encode(ps.q),
            title:title
          }
  return ps.callback(obj)
}
// freebase.wikipedia_to_freebase("Tony Hawk")



freebase.add_widget=function(obj){
  this.doc="add a generic html view of a topic"
  if(!obj || !id){return obj}
  var id=obj.mid|| obj.id;
  var html='<a href="#" class="imagewrap" data-id="'+id+'" style="position:relative; width:200px; height:200px;">'
    +'<img style="border-radius:5px;" src="'+globals.image_host
    +id
    +'?maxwidth=200&maxheight=200&errorid=/m/0djw4wd"/>'
      if(obj.name){
      html+='<div class="caption" style="position:absolute; opacity:0.5; background:black; bottom:10px; color:white; left:10px; border-radius: 5px; min-width:100px; padding:5px;">'
         +obj.name
      +'</div>'
    }
  html+='</a>'
  obj.widget=html;
  return obj;
}


//soften up the api so it will take these methods alternatively..

// for(var i in aliases){
//   aliases[i].map(function(v){
//     freebase[v]=freebase[i]
//     freebase[v].is_alias=true
//   })
// }



  var aliases={
    mqlread:["query", "mql_read"],
    topic:["topic_api","all_data","data","everything","get_data"],
    paginate:["continue","all","each"],
    same_as_links:["sameas","sameAs","sameaslinks","links","sameas_links","external_links","weblinks"],
    translate:["translate_to","multilingual","i8n", "get_translation"],
    image:["pic","photo","picture","get_image","image_url","image_src"],
    description:["get_description","blurb","get_blurb","blurb_api","text","get_text"],
    notable:["notable_type","notabletype","notable_for","notable_as","main_type","type"],
    place_data:["city","country","province","place_info","location_info","location","whereis"],
    incoming:["incoming_links", "incoming_nodes","inlinks"],
    outgoing:["outgoing_links", "outgoing_nodes","outlinks"],
    related:["related_topics","similar","related_to","get_related"],
    gallery:["images","get_images"],
    geolocation:["geo","geocoordinates","geo_location","lat_lng","location"],
    nearby:["near", "close_to"],
    inside:["inside_of","within","contained_by","contains"],
    mql_encode:["encode","escape"]
  }

//
var documentation=function(f,options,callback){
  callback=callback||console.log;
  options=options||{};
  var str=[];
    str.push('Freebase.com nodejs-library')
    str.push('https://github.com/spencermountain/Freebase-nodejs--');
    if(f){
      if(freebase[f]){
        str.push(" * "+f)
        var f=new freebase[f]()
        str.push(f.doc)
      return
      }else{
        str.push("Couldn't find the function "+f+". Here are the available functions:")
      }
    }
    Object.keys(freebase).map(function(f){
        str.push("* **"+f+'** ')
        var f=new freebase[f](null,{},function(){})
        str.push('     -'+f.doc)
    })
    if(options.html){
      str=str.join('<br/>')
    }
    else{
      str=str.join('\n')
    }
    callback(str)
}

return freebase
  })()
})( jQuery );