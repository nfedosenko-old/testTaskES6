export default class TemplateFactory {

    static getTableTemplate() {
        return $(
            `<table class="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Genius</th>
                        <th>Superpower</th>
                        <th>Invisible</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>`
        );
    }

    static getTableCellTemplate() {
    }

    static getSidebarTemplate() {
        return $(
            `<div class="col-md-12">
                 <h1 class="lead">Statistics</h1>
             </div>`
        );
    }


}