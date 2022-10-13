<!-- generate the bd at start -->

dotenv npx sequelize db:migrate

<!-- generate a migration file  -->

npx sequelize migration:generate --name cats

<!-- need to more understand this  -->

Keep in mind that changes to the constraints before rolling out to production will require you to rollback the current migration, make the changes, and then commit the new migration. However, if the migration is already in production, you will have to create a new migration with the changes to the tables or with new indexes.

sequelize-cli db:migrate
