import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "spanner",
    projectId: "my-project-id",
    instanceId: "my-instance-id",
    databaseId: "my-database-id",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
})
