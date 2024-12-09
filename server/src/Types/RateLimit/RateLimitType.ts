export type RateLimit = {
    rate_limit_id: number;
    user_id: number;
    user_ip: string;
    limit_type: string;
    limit_count: number;
    current_count: number;
    time_window: number;
    reset_time: Date;
    created_at: Date;
};