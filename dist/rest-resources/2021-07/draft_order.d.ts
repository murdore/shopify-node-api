import Base, { ResourcePath } from '../../base-rest-resource';
import { SessionInterface } from '../../auth/session/types';
import { ApiVersion } from '../../base-types';
import { Customer } from './customer';
interface FindArgs {
    session: SessionInterface;
    id: number | string;
    fields?: unknown;
}
interface DeleteArgs {
    session: SessionInterface;
    id: number | string;
}
interface AllArgs {
    [key: string]: unknown;
    session: SessionInterface;
    fields?: unknown;
    limit?: unknown;
    since_id?: unknown;
    updated_at_min?: unknown;
    updated_at_max?: unknown;
    ids?: unknown;
    status?: unknown;
}
interface CountArgs {
    [key: string]: unknown;
    session: SessionInterface;
    since_id?: unknown;
    status?: unknown;
    updated_at_max?: unknown;
    updated_at_min?: unknown;
}
interface SendInvoiceArgs {
    [key: string]: unknown;
    body?: {
        [key: string]: unknown;
    } | null;
}
interface CompleteArgs {
    [key: string]: unknown;
    payment_pending?: unknown;
    body?: {
        [key: string]: unknown;
    } | null;
}
export declare class DraftOrder extends Base {
    static API_VERSION: ApiVersion;
    protected static NAME: string;
    protected static PLURAL_NAME: string;
    protected static HAS_ONE: {
        [key: string]: typeof Base;
    };
    protected static HAS_MANY: {
        [key: string]: typeof Base;
    };
    protected static PATHS: ResourcePath[];
    static find({ session, id, fields }: FindArgs): Promise<DraftOrder | null>;
    static delete({ session, id }: DeleteArgs): Promise<unknown>;
    static all({ session, fields, limit, since_id, updated_at_min, updated_at_max, ids, status, ...otherArgs }: AllArgs): Promise<DraftOrder[]>;
    static count({ session, since_id, status, updated_at_max, updated_at_min, ...otherArgs }: CountArgs): Promise<unknown>;
    send_invoice({ body, ...otherArgs }: SendInvoiceArgs): Promise<unknown>;
    complete({ payment_pending, body, ...otherArgs }: CompleteArgs): Promise<unknown>;
    applied_discount: {
        [key: string]: unknown;
    } | null;
    billing_address: {
        [key: string]: unknown;
    } | null;
    completed_at: string | null;
    created_at: string | null;
    currency: string | null;
    customer: Customer | null | {
        [key: string]: any;
    };
    email: string | null;
    id: number | null;
    invoice_sent_at: string | null;
    invoice_url: string | null;
    line_items: {
        [key: string]: unknown;
    }[] | null;
    name: string | null;
    note: string | null;
    note_attributes: {
        [key: string]: unknown;
    }[] | null;
    order_id: number | null;
    shipping_address: {
        [key: string]: unknown;
    } | null;
    shipping_line: {
        [key: string]: unknown;
    } | null;
    source_name: string | null;
    status: string | null;
    subtotal_price: number | null;
    tags: string | null;
    tax_exempt: boolean | null;
    tax_exemptions: string[] | null;
    tax_lines: {
        [key: string]: unknown;
    }[] | null;
    taxes_included: boolean | null;
    total_price: string | null;
    total_tax: string | null;
    updated_at: string | null;
}
export {};
//# sourceMappingURL=draft_order.d.ts.map