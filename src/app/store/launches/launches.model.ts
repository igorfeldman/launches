

export interface ILaunch {
    flight_number: number;
    mission_name: string;
    launch_date_utc: Date;
    launch_success: boolean;
    rocket: IRocket;
    links: ILinks;
}

export interface IRocket {
    rocket_name: string;
    rocket_type: string;
    fairings: IFairings;
}

export interface ILinks {
    mission_patch_small: string;
}

export interface IFairings {
    reused: boolean;
}